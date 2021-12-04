package sqls

var ExistsUserSQL = `
	select exists(
			select 1
			from directus_users as u
			where u.tg_username = $1
		)`
