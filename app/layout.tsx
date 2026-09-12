import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { type ReactNode } from "react"
import { Footer, Header } from "@/components/shared"
import { geist, oswald, russo, jaro } from "./fonts"
import "@/styles/reset.scss"
import "@/styles/general.scss"

export const metadata: Metadata = {
	metadataBase: new URL("https://veloce-mocktails.vercel.app/"),

	title: "Véloce — безалкогольный аперитив для современного образа жизни",
	description:
		"Véloce — это новая эра аперитивов: безалкогольные напитки, в которых вкус и функциональность сливаются воедино.",
	keywords: [
		"Véloce",
		"безалкогольный аперитив",
		"моктейли",
		"безалкогольные напитки",
		"аперитив",
		"здоровый образ жизни",
		"премиальные напитки"
	],

	authors: [{ name: "sweetconsole" }],

	openGraph: {
		title: "Véloce — безалкогольный аперитив для современного образа жизни",
		description:
			"Véloce — это новая эра аперитивов: безалкогольные напитки, в которых вкус и функциональность сливаются воедино.",
		url: "https://veloce-mocktails.vercel.app/",
		siteName: "Véloce",
		locale: "ru_RU",
		type: "website",
		images: [
			{
				url: "/preview.png",
				width: 1657,
				height: 928,
				alt: "Véloce — безалкогольный аперитив"
			}
		]
	},

	twitter: {
		card: "summary_large_image",
		title: "Véloce — безалкогольный аперитив для современного образа жизни",
		description:
			"Véloce — это новая эра аперитивов: безалкогольные напитки, в которых вкус и функциональность сливаются воедино.",
		images: ["/preview.png"]
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1
		}
	},

	alternates: {
		canonical: "https://veloce-mocktails.vercel.app/"
	},

	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png"
	}
}
const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html id="html" lang="en">
			<head>
				<meta name="color-scheme" content="only light" />
			</head>
			<body
				className={`${geist.variable} ${russo.variable} ${oswald.variable} ${jaro.variable}`}
			>
				<Header />

				{children}

				<Footer />

				<SpeedInsights />
			</body>
		</html>
	)
}

export default RootLayout
