export type Ingredient = {
	title: string
	image: string
}

export const ingredients: { [key: string]: Ingredient } = {
	agave: {
		title: "Agave",
		image: "/images/ingredients/agave.png"
	},
	cardamom: {
		title: "Cardamom",
		image: "/images/ingredients/cardamom.png"
	},
	chamomile: {
		title: "Chamomile",
		image: "/images/ingredients/chamomile.png"
	},
	cinnamon: {
		title: "Cinnamon",
		image: "/images/ingredients/cinnamon.png"
	},
	elderberry: {
		title: "Elderberry",
		image: "/images/ingredients/elderberry.png"
	},
	ginger: {
		title: "Ginger",
		image: "/images/ingredients/ginger.png"
	},
	grapefruit: {
		title: "Grapefruit",
		image: "/images/ingredients/grapefruit.png"
	},
	lavender: {
		title: "Lavender",
		image: "/images/ingredients/lavender.png"
	},
	lemon: {
		title: "Lemon",
		image: "/images/ingredients/lemon.png"
	},
	lime: {
		title: "Lime",
		image: "/images/ingredients/lime.png"
	},
	mint: {
		title: "Mint",
		image: "/images/ingredients/mint.png"
	}
}
