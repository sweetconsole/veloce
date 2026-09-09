export type Ingredient = {
	title: string
	image: string
}

export const ingredients: { [key: string]: Ingredient } = {
	agave: {
		title: "Агава",
		image: "/images/ingredients/agave.png"
	},
	cardamom: {
		title: "Кардамон",
		image: "/images/ingredients/cardamom.png"
	},
	chamomile: {
		title: "Ромашка",
		image: "/images/ingredients/chamomile.png"
	},
	cinnamon: {
		title: "Корица",
		image: "/images/ingredients/cinnamon.png"
	},
	elderberry: {
		title: "Бузина",
		image: "/images/ingredients/elderberry.png"
	},
	ginger: {
		title: "Имбирь",
		image: "/images/ingredients/ginger.png"
	},
	grapefruit: {
		title: "Грейпфрут",
		image: "/images/ingredients/grapefruit.png"
	},
	lavender: {
		title: "Лаванда",
		image: "/images/ingredients/lavender.png"
	},
	lemon: {
		title: "Лимон",
		image: "/images/ingredients/lemon.png"
	},
	lime: {
		title: "Лайм",
		image: "/images/ingredients/lime.png"
	},
	mint: {
		title: "Мята",
		image: "/images/ingredients/mint.png"
	}
}
