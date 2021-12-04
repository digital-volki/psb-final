package configs

import (
	"os"
	"strconv"
)

func GetConfigs() *Config {
	host := os.Getenv("HOST")
	port := os.Getenv("PORT")
	user := os.Getenv("USER")
	password := os.Getenv("PASSWORD")
	dbname := os.Getenv("DB_NAME")
	token := os.Getenv("TOKEN")
	apiPort := os.Getenv("API_PORT")

	portInt, _ := strconv.Atoi(port)
	apiPortInt, _ := strconv.Atoi(apiPort)

	return &Config{
		DbHost:     host,
		DbPort:     uint16(portInt),
		DbUser:     user,
		DbPassword: password,
		DbName:     dbname,
		BotToken:   token,
		Port:       apiPortInt,
	}
}
