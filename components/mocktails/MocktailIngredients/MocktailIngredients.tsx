"use client"
import Image from "next/image"
import { type FC } from "react"
import { Container, Heading } from "@/components/shared"
import { useMocktail } from "@/hooks/useMocktail"
import styles from "./MocktailIngredients.module.scss"

const MocktailIngredients: FC = () => {
	const mocktail = useMocktail()

	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<Heading className={styles.title} level={1}>
					Ingredients
				</Heading>

				<ul className={styles.ingredients}>
					{mocktail.ingredients.map((ingredient, index) => (
						<li className={styles.ingredient} key={index}>
							<Image
								className={styles.ingredient_image}
								src={ingredient.image}
								alt={ingredient.title}
								width={500}
								height={500}
							/>
							<Heading className={styles.ingredient_title} level={3}>
								{ingredient.title}
							</Heading>
						</li>
					))}
				</ul>

				<div className={styles.line} />

				<Heading className={styles.title} level={1}>
					Perfect Serve:
				</Heading>
				<Heading className={styles.serve} level={3}>
					{mocktail.serveDescription}
				</Heading>
			</Container>
		</section>
	)
}

export default MocktailIngredients
