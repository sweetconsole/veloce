type Contact = {
	type: string
	value: string
	link: string
}

export const contacts: Array<Contact> = [
	{
		type: "Телефон",
		value: "+7 (415) 555-45-67",
		link: "tel:+74155554567"
	},
	{
		type: "Почта",
		value: "hello@veloce.com",
		link: "mailto:hello@veloce.com"
	},
	{
		type: "Соц. сети",
		value: "@veloce",
		link: "https://kwork.ru/user/sweetconsole"
	}
]
