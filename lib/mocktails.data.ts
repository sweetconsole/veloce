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
		shortDescription: "Нежный цветочный с нотами лаванды и ромашки.",
		longDescription:
			"Нежный цветочный с ароматами лаванды и ромашки, смягченными нотами бузины и лимона для изысканного послевкусия.",
		serveDescription:
			"Нежный цветочный аперитив. Подается в охлажденном бокале для мартини. Украшен веточкой свежей лаванды и щепоткой сушеных цветков ромашки. По желанию можно добавить цедру лимона для аромата.",
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
		shortDescription: "Освежающий и яркий с яркими цитрусовыми нотками.",
		longDescription:
			"Яркий и освежающий с цитрусовым акцентом, в котором грейпфрут, лимон и мята гармонично сочетаются с мягкой сладостью агавы.",
		serveDescription:
			"Яркий цитрусовый аперитив. Подается в высоком двойном рокс-стакане на большом кубике льда. Украшен тонким ломтиком грейпфрута, долькой лимона и веточкой свежей мяты.",
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
		shortDescription: "Смелый пряный с кардамоном, имбирем и корицей.",
		longDescription:
			"Смелый и пряный с насыщенным вкусом кардамона, имбиря и корицы, дополненный кислинкой лайма и сладостью меда или аниса.",
		serveDescription:
			"Пряный, насыщенный аперитив. Подается в бокале купе. Украшен палочкой корицы, тонкой полоской цедры лайма и звездочкой бадьяна.",
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
