package bot

import tgbotapi "github.com/Syfaro/telegram-bot-api"

const (
	waitMessage     = "Волчата рыскают в поиске вашего аккаунта... пожалуйста подождите"
	successMessage  = "Волчата успешно запомнили дорогу до ваше аккаунта.!"
	notFoundMessage = "Волчата не нашли дорогу до вашего аккаунта! Укажите 'Nickname' от Telegram в своём аккаунте!"
)

func (h *BotHandler) Start(update tgbotapi.Update) error {
	msg := tgbotapi.NewMessage(update.Message.Chat.ID, waitMessage)
	_, err := h.Bot.Send(msg)
	if err != nil {
		return err
	}

	exists, err := h.Repository.ExistUser(update.Message.Chat.UserName)
	if err != nil {
		return err
	}

	var msgText string
	if exists {
		err = h.Repository.BindChatId(update.Message.Chat.UserName, update.Message.Chat.ID)
		if err != nil {
			return err
		}
		msgText = successMessage
	} else {
		msgText = notFoundMessage
	}

	msg = tgbotapi.NewMessage(update.Message.Chat.ID, msgText)
	_, err = h.Bot.Send(msg)
	if err != nil {
		return err
	}

	if err = h.NotifyAboutTasks(update); err != nil {
		return err
	}

	return nil
}
