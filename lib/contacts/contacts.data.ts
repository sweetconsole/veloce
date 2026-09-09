type ContactLinkType = "email" | "phone" | "address" | "url"

export type ContactLink = {
	type: ContactLinkType
	title: string
	value: string
}

type Contact = {
	region: string
	links: ContactLink[]
}

export const contacts: Contact[] = [
	{
		region: "Москва",
		links: [
			{
				type: "address",
				title: "The Artisanal Grocer",
				value: "ул. Тверская, 15, Москва"
			},
			{
				type: "email",
				title: "msc@veloce.com",
				value: "msc@veloce.com"
			},
			{
				type: "phone",
				title: "+7 (646) 555-45-67",
				value: "+76465554567"
			}
		]
	},
	{
		region: "Санкт-Петербург",
		links: [
			{
				type: "address",
				title: "Le Marché Bio",
				value: "Невский пр., 45, Санкт-Петербург"
			},
			{
				type: "email",
				title: "spb@veloce.com",
				value: "spb@veloce.com"
			}
		]
	},
	{
		region: "Казань",
		links: [
			{
				type: "address",
				title: "Kurashi & Co.",
				value: "ул. Баумана, 12, Казань"
			},
			{
				type: "email",
				title: "kzn@veloce.com",
				value: "kzn@veloce.com"
			}
		]
	}
]

export function getContactLinkHref(link: ContactLink): string | undefined {
	switch (link.type) {
		case "email":
			return `mailto:${link.value}`
		case "phone":
			return `tel:${link.value}`
		case "address":
			return undefined
		case "url":
			return link.value
	}
}
