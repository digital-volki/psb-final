package bot

import tgbotapi "github.com/Syfaro/telegram-bot-api"

const (
	unknownCommand        = "К сожалению пушистые волчата не смогли понять ваши пожелания :( Попробуйте ещё раз"
	unexpectedMessageType = "К сожалению пушистые волчата не смогли прощупать лапками ваше сообщение :( Попробуйте ещё раз"
	errorText             = "Произошла непредвиденная ошибка..."
)

func (h *BotHandler) UnknownCommand(update tgbotapi.Update) error {
	msg := tgbotapi.NewMessage(update.Message.Chat.ID, unknownCommand)
	_, err := h.Bot.Send(msg)
	if err != nil {
		return err
	}
	return nil
}

func (h *BotHandler) UnexpectedMessageType(update tgbotapi.Update) error {
	msg := tgbotapi.NewMessage(update.Message.Chat.ID, unexpectedMessageType)
	_, err := h.Bot.Send(msg)
	if err != nil {
		return err
	}
	return nil
}

func (h *BotHandler) UnexpectedError(update tgbotapi.Update) error {
	msg := tgbotapi.NewMessage(update.Message.Chat.ID, errorText)
	_, err := h.Bot.Send(msg)
	if err != nil {
		return err
	}
	return nil
}
