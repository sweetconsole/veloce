"use client"
import { usePathname } from "next/navigation"
import { type FC } from "react"
import DefaultHeader from "@/components/shared/Header/DefaultHeader/DefaultHeader"
import HomeHeader from "@/components/shared/Header/HomeHeader/HomeHeader"

const Header: FC = () => {
	const pathname = usePathname()

	if (pathname === "/") return <HomeHeader />

	return <DefaultHeader />
}

export default Header
