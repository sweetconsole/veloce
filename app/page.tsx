import {
	AboutTeaser,
	Intro,
	NewProduct,
	Products,
	Menu,
	WhereToBuy,
	Footer
} from "@/components/widgets"

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
