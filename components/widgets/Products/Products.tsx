import Image from "next/image"
import Link from "next/link"
import { type FC } from "react"
import { Container, Heading, Paragraph } from "@/components/shared"
import { mocktails } from "@/lib/mocktails.data"
import { ROUTES } from "@/utils/routes.config"
import styles from "./Products.module.scss"

const Products: FC = () => {
	return (
		<Container className={styles.section} tag={"section"}>
			<ul className={styles.products}>
				{mocktails.map((mocktail, index) => (
					<li className={styles.product} key={index}>
						<Heading className={styles.title} level={2}>
							{mocktail.title}
						</Heading>
						<Image
							className={styles.image}
							src={mocktail.image}
							alt={mocktail.title}
							width={700}
							height={700}
						/>

						<Paragraph className={styles.description}>
							{mocktail.shortDescription}
						</Paragraph>

						<Link
							className={styles.link}
							href={`${ROUTES.MOCKTAILS}/${mocktail.slug}`}
						>
							<Paragraph className={styles.description}>
								Find near you
							</Paragraph>
						</Link>
					</li>
				))}
			</ul>
		</Container>
	)
}

export default Products
