import { Products } from "@/components/home"
import { MocktailsIntro, MocktailsFindUs } from "@/components/mocktails"

export default function ContactPage() {
	return (
		<main>
			<MocktailsIntro />
			<Products />
			<MocktailsFindUs />
		</main>
	)
}
