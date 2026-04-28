"use client"
import { type FC } from "react"
import { useMocktail } from "@/hooks/useMocktail"
import styles from "./MocktailIntro.module.scss"

const MocktailIntro: FC = () => {
	const mocktail = useMocktail()

	return <section className={styles.section}>{mocktail.title}</section>
}

export default MocktailIntro
