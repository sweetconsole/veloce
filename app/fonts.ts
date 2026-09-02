import { Geist, Russo_One, Oswald, Jaro } from "next/font/google"

export const geist = Geist({
	subsets: ["cyrillic", "latin"],
	variable: "--font-geist",
	display: "swap"
})

export const russo = Russo_One({
	weight: "400",
	subsets: ["cyrillic", "latin"],
	variable: "--font-russo",
	display: "swap"
})

export const oswald = Oswald({
	subsets: ["cyrillic", "latin"],
	variable: "--font-oswald",
	display: "swap"
})

export const jaro = Jaro({
	subsets: ["latin"],
	variable: "--font-jaro",
	display: "swap"
})
