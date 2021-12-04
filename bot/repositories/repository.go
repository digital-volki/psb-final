package repositories

import (
	"fmt"
	"github.com/jackc/pgx"
	"psbBot/configs"
	"psbBot/repositories/sqls"
)

type Repository struct {
	Config     *configs.Config
	DriverName string
}

func NewRepository(config configs.Config) *Repository {
	return &Repository{
		Config:     &config,
		DriverName: "postgres",
	}
}

func (r *Repository) ExistUser(username string) (bool, error) {
	var exists bool
	db, err := pgx.Connect(mapToConfig(*r.Config))
	if err != nil {
		return false, err
	}
	defer db.Close()

	row := db.QueryRow(sqls.ExistsUserSQL, username)
	err = row.Scan(&exists)
	if err != nil {
		return false, err
	}
	return exists, nil
}

func (r *Repository) BindChatId(username string, chatId int64) error {
	if username == "" || chatId <= 0 {
		return fmt.Errorf("incorrect args")
	}

	db, err := pgx.Connect(mapToConfig(*r.Config))
	if err != nil {
		return err
	}
	defer db.Close()

	_, err = db.Exec(sqls.BindChatIdSQL, username, chatId)
	if err != nil {
		return err
	}

	return nil
}

func mapToConfig(config configs.Config) pgx.ConnConfig {
	return pgx.ConnConfig{
		Host:     config.DbHost,
		Port:     config.DbPort,
		User:     config.DbUser,
		Password: config.DbPassword,
		Database: config.DbName,
	}
}
