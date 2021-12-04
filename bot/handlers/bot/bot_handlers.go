package bot

import (
	tgbotapi "github.com/Syfaro/telegram-bot-api"
	"log"
	"psbBot/repositories"
	"reflect"
)

const (
	startCommand           = "/start"
	getCurrentTasksCommand = "/get_current_tasks"
)

type BotHandler struct {
	Bot        *tgbotapi.BotAPI
	Repository *repositories.Repository
}

func NewBotHandler(bot *tgbotapi.BotAPI, repository repositories.Repository) *BotHandler {
	return &BotHandler{
		Bot:        bot,
		Repository: &repository,
	}
}

func (h *BotHandler) Handle(update tgbotapi.Update) {
	var err error
	if isTextMessage(update) {
		switch update.Message.Text {
		case startCommand:
			err = h.Start(update)
		case getCurrentTasksCommand:
			err = h.GetCurrentTasks(update)
		default:
			err = h.UnknownCommand(update)
		}
	} else {
		err = h.UnexpectedMessageType(update)
	}

	if err != nil {
		log.Println(err)
		err := h.UnexpectedError(update)
		if err != nil {
			log.Println(err)
			return
		}
	}
}

func isTextMessage(update tgbotapi.Update) bool {
	return reflect.TypeOf(update.Message.Text).Kind() == reflect.String && update.Message.Text != ""
}
