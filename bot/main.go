package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"psbBot/configs"
	"syscall"
	"time"
)

func main() {
	log.SetFlags(log.Flags() | log.Lshortfile)

	mainCtx, cancelMainCtx := context.WithCancel(context.Background())

	settings := configs.GetConfigs()
	app, err := CreateApp(mainCtx, *settings)
	if err != nil {
		panic(err)
	}

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)
	log.Println("start")
	app.Run()

	s := <-stop
	cancelMainCtx()

	log.Printf("received stop signal: %s\n", s)
	timeoutCtx, cancelFunc := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancelFunc()

	err = app.Server.Shutdown(timeoutCtx)
	if err != nil {
		log.Println(err)
	}
}
