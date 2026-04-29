import { Metadata } from "next"
import { notFound } from "next/navigation"
import { MocktailIntro } from "@/components/mocktails"
import { MocktailProvider } from "@/hooks/useMocktail"
import { getMocktailBySlug } from "@/lib/mocktails.data"

export async function generateMetadata({
	params
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const { slug } = await params
	const mocktail = getMocktailBySlug(slug.toLowerCase())

	if (!mocktail) {
		return {
			title: "Véloce | Mocktail not found"
		}
	}

	return {
		title: `Véloce | ${mocktail.title}`,
		description: mocktail.longDescription
	}
}

export default async function MocktailPage({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const mocktail = getMocktailBySlug(slug.toLowerCase())

	if (!mocktail) {
		return null
	}

	console.log(mocktail)

	return (
		<MocktailProvider mocktail={mocktail}>
			<MocktailIntro />
		</MocktailProvider>
	)
}
