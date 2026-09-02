import {
	AboutTeaser,
	Intro,
	NewProduct,
	Products,
	Menu,
	WhereToBuy
} from "@/components/home"

export default function Home() {
	return (
		<main>
			<Intro />
			<AboutTeaser />
			<NewProduct />
			<Products />
			<Menu />
			<WhereToBuy />
		</main>
	)
}
