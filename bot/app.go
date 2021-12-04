package main

import (
	"context"
	"fmt"
	tgbotapi "github.com/Syfaro/telegram-bot-api"
	"log"
	"net"
	"net/http"
	"psbBot/configs"
	"psbBot/handlers/bot"
	"psbBot/handlers/rest"
	"psbBot/repositories"
)

type App struct {
	Config  *configs.Config
	Bot     *tgbotapi.BotAPI
	Handler *bot.BotHandler
	Server  *http.Server
	MainCtx context.Context
}

func CreateApp(baseCtx context.Context, config configs.Config) (*App, error) {
	botApi, err := tgbotapi.NewBotAPI(config.BotToken)
	if err != nil {
		return nil, err
	}

	repository := repositories.NewRepository(config)
	handler := bot.NewBotHandler(botApi, *repository)

	router := rest.NewMux()

	server := &http.Server{
		Addr:    fmt.Sprintf(":%d", config.Port),
		Handler: router,
		BaseContext: func(_ net.Listener) context.Context {
			return baseCtx
		},
	}

	return &App{
		Config:  &config,
		Bot:     botApi,
		Handler: handler,
		Server:  server,
		MainCtx: baseCtx,
	}, nil
}

func (a *App) Run() {
	go func() {
		if err := a.Server.ListenAndServe(); err != nil {
			log.Println(err)
		}
	}()
	log.Printf("Application run on port %s\n", a.Server.Addr)

	u := tgbotapi.NewUpdate(0)
	u.Timeout = 60

	updates, _ := a.Bot.GetUpdatesChan(u)

	for update := range updates {
		if update.Message == nil {
			continue
		}

		a.Handler.Handle(update)
	}

}
