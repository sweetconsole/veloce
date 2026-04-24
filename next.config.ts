import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */

	images: {
		formats: ["image/avif", "image/webp"]
	},

	sassOptions: {
		logger: {
			warn: function (message: string) {
				console.warn(message)
			},
			debug: function (message: string) {
				console.log(message)
			}
		}
	}
}

export default nextConfig
