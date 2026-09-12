import { type MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Véloce — безалкогольный аперитив для современного образа жизни",
		short_name: "Véloce",
		description:
			"Véloce — это новая эра аперитивов: безалкогольные напитки, в которых вкус и функциональность сливаются воедино.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#CD9D65",
		icons: [
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png"
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png"
			}
		]
	}
}
