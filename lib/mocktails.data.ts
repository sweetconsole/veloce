import { Ingredient, ingredients } from "./ingredients.data"

export type Mocktail = {
	slug: string
	title: string
	shortDescription: string
	longDescription: string
	serveDescription: string
	image: string
	ingredients: Array<Ingredient>
}

export const mocktails: Array<Mocktail> = [
	{
		slug: "lavande",
		title: "Lavande",
		shortDescription:
			"A delicate and floral aperitif with notes of lavender and chamomile.",
		longDescription:
			"A delicate and floral aperitif with lavender and chamomile aromas, softened by notes of elderberry and lemon for an exquisite aftertaste.",
		serveDescription:
			"A delicate floral aperitif. Served in a chilled martini glass. Garnished with a sprig of fresh lavender and a pinch of dried chamomile flowers. Lemon zest is optional for flavor.",
		image: "/images/mocktails/lavande.jpg",
		ingredients: [
			ingredients.lavender,
			ingredients.chamomile,
			ingredients.elderberry,
			ingredients.lemon
		]
	},
	{
		slug: "primavera",
		title: "Primavera",
		shortDescription:
			"A refreshing and vibrant aperitif with bright citrus notes.",
		longDescription:
			"A bright and refreshing aperitif with a citrus accent, where grapefruit, lemon, and mint are harmoniously combined with the mild sweetness of agave.",
		serveDescription:
			"A bright citrus aperitif. Served in a tall double rocks glass on a large ice cube. Garnished with a thin slice of grapefruit, a lemon slice, and a fresh mint sprig.",
		image: "/images/mocktails/primavera.jpg",
		ingredients: [
			ingredients.grapefruit,
			ingredients.lemon,
			ingredients.mint,
			ingredients.agave
		]
	},
	{
		slug: "spezia",
		title: "Spezia",
		shortDescription:
			"A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.",
		longDescription:
			"A bold and spicy aperitif with a rich flavor of cardamom, ginger, and cinnamon, complemented by the tartness of lime and the sweetness of honey or anise.",
		serveDescription:
			"A spicy, rich aperitif. Served in a coupe glass. It is decorated with a cinnamon stick, a thin strip of lime zest, and an star of star anise.",
		image: "/images/mocktails/spezia.jpg",
		ingredients: [
			ingredients.cardamom,
			ingredients.ginger,
			ingredients.cinnamon,
			ingredients.lime
		]
	}
]

export function getMocktailBySlug(slug: string) {
	return mocktails.find(mocktail => mocktail.slug === slug)
}

export function getAllMocktailSlugs(): { slug: string }[] {
	return mocktails.map(mocktail => ({
		slug: mocktail.slug.toLowerCase()
	}))
}
