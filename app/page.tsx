import {
	AboutTeaser,
	Intro,
	NewProduct,
	Products,
	Menu
} from "@/components/widgets"

export default function Home() {
	return (
		<main>
			<Intro />
			<AboutTeaser />
			<NewProduct />
			<Products />
			<Menu />
		</main>
	)
}
