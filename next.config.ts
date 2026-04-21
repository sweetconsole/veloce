import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */

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
