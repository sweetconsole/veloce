type Link = {
	title: string
	href?: string
}

type Contact = {
	region: string
	links: Link[]
}

export const contacts: Contact[] = [
	{
		region: "Москва",
		links: [
			{
				title: "The Artisanal Grocer"
			},
			{
				title: "msc@veloce.com",
				href: "mailto:msc@veloce.com"
			},
			{
				title: "+7 (646) 555-45-67",
				href: "tel:+76465554567"
			}
		]
	},
	{
		region: "Санкт-Петербург",
		links: [
			{
				title: "Le Marché Bio"
			},
			{
				title: "spb@veloce.com",
				href: "mailto:spb@veloce.com"
			}
		]
	},
	{
		region: "Казань",
		links: [
			{
				title: "Kurashi & Co."
			},
			{
				title: "kzn@veloce.com",
				href: "mailto:kzn@veloce.com"
			}
		]
	}
]
