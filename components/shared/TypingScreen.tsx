"use client"
import {useEffect} from "react"
import { notLaptop, notMobile, heightTemplateMobile, heightTemplateLaptop, heightTemplateTablet, widthTemplateLaptop, widthTemplateMobile, widthTemplateTablet } from "@/utils/adaptive.constants"

const TypingScreen = () => {
	useEffect(() => {
		const typingScreen = () => {
			const width = window.screen.width
			const height = window.screen.height

			if (width > notLaptop) {
				if (width / height >= widthTemplateLaptop / heightTemplateLaptop) {
					document.getElementById("html")!.classList = "landscape-laptop"
				} else {
					document.getElementById("html")!.classList = "portrait-laptop"
				}
			} else if (width > notMobile) {
				if (width / height >= widthTemplateTablet / heightTemplateTablet) {
					document.getElementById("html")!.classList = "landscape-tablet"
				} else {
					document.getElementById("html")!.classList = "portrait-tablet"
				}
			} else {
				if (width / height >= widthTemplateMobile / heightTemplateMobile) {
					document.getElementById("html")!.classList = "landscape-mobile"
				} else {
					document.getElementById("html")!.classList = "portrait-mobile"
				}
			}
		}

		window.addEventListener("resize", typingScreen)

		typingScreen()
	})

	return null
}

export default TypingScreen