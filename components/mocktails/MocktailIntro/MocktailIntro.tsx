"use client"
import Image from "next/image"
import { type FC } from "react"
import { ActionButton, Heading, PageTitle } from "@/components/shared"
import { useMocktail } from "@/hooks/useMocktail"
import { ROUTES } from "@/utils/routes.config"
import styles from "./MocktailIntro.module.scss"

const MocktailIntro: FC = () => {
	const mocktail = useMocktail()

	return (
		<section className={styles.section}>
			<div className={styles.info}>
				<PageTitle className={styles.title}>{mocktail.title}</PageTitle>

				<Heading className={styles.description} level={2}>
					{mocktail.longDescription}
				</Heading>

				<ActionButton className={styles.button} as="link" href={ROUTES.CONTACT}>
					Shop now
				</ActionButton>
			</div>

			<Image
				className={styles.image}
				src={mocktail.image}
				alt={""}
				width={1000}
				height={1000}
			/>
		</section>
	)
}

export default MocktailIntro
