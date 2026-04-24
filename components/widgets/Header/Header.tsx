"use client"
import { usePathname } from "next/navigation"
import { type FC } from "react"
import DefaultHeader from "./DefaultHeader/DefaultHeader"
import HomeHeader from "./HomeHeader/HomeHeader"

const Header: FC = () => {
	const pathname = usePathname()

	if (pathname === "/") return <HomeHeader />

	return <DefaultHeader />
}

export default Header
