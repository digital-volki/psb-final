package bot

import tgbotapi "github.com/Syfaro/telegram-bot-api"

const (
	notFoundCommandMessage = "Волчата не смогли учуять ваш аккаунт! Укажите 'Nickname' от Telegram в своём аккаунте, и сделайте /start!"
	notifyMessage          = "Волчата спешат напомнить, что у вас есть задания на сегодня!\n- 1. Правила героев ПСБ\n- 2. Разработка программного решения для онбординга новых ИТ-специалистов банка\n- 3. Как поступать"
)

func (h *BotHandler) GetCurrentTasks(update tgbotapi.Update) error {
	exists, err := h.Repository.ExistUser(update.Message.Chat.UserName)
	if err != nil {
		return err
	}

	if !exists {
		msg := tgbotapi.NewMessage(update.Message.Chat.ID, notFoundCommandMessage)
		_, err = h.Bot.Send(msg)
		if err != nil {
			return err
		}
		return nil
	}

	if err = h.NotifyAboutTasks(update); err != nil {
		return err
	}

	return nil
}

// NotifyAboutTasks уведомление о сегодняшних задачах
func (h *BotHandler) NotifyAboutTasks(update tgbotapi.Update) error {
	msg := tgbotapi.NewMessage(update.Message.Chat.ID, notifyMessage) // значения задач захардкожены
	_, err := h.Bot.Send(msg)
	if err != nil {
		return err
	}
	return nil
}
