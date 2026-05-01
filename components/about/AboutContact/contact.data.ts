type Contact = {
	type: string
	value: string
	link: string
}

export const contacts: Array<Contact> = [
	{
		type: "Phone",
		value: "415-555-4567",
		link: "tel:4155554567"
	},
	{
		type: "Email",
		value: "hello@veloce.com",
		link: "mailto:hello@veloce.com"
	},
	{
		type: "Social",
		value: "@veloce",
		link: "https://kwork.ru/user/sweetconsole"
	}
]
