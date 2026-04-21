"use client"
import { type FC } from "react"
import { usePathname } from "next/navigation"
import HomeHeader from "./HomeHeader/HomeHeader"
import DefaultHeader from "./DefaultHeader/DefaultHeader"

const Header: FC = () => {
	const pathname = usePathname()

	if (pathname === "/") return <HomeHeader />

	return <DefaultHeader />
}

export default Header
