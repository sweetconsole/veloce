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
		region: "USA",
		links: [
			{
				title: "The Artisanal Grocer"
			},
			{
				title: "usa@veloce.com",
				href: "mailto:usa@veloce.com"
			},
			{
				title: "+1 (555) 123-4567",
				href: "tel:+15551234567"
			}
		]
	},
	{
		region: "Europe",
		links: [
			{
				title: "Le Marché Bio"
			},
			{
				title: "europe@veloce.com",
				href: "mailto:europe@veloce.com"
			}
		]
	},
	{
		region: "Asia",
		links: [
			{
				title: "Kurashi & Co."
			},
			{
				title: "asia@veloce.com",
				href: "mailto:asia@veloce.com"
			}
		]
	}
]
