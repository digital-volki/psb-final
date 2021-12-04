package sqls

var BindChatIdSQL = `
	update directus_users 
	set tg_id = $2
	where tg_username = $1`
