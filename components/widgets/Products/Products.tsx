import Image from "next/image"
import { type FC } from "react"
import { Container, Heading, Paragraph } from "@/components/shared"
import { products } from "@/components/widgets/Products/products.data"
import styles from "./Products.module.scss"

const Products: FC = () => {
	return (
		<Container className={styles.section} tag={"section"}>
			<ul className={styles.products}>
				{products.map((product, index) => (
					<li className={styles.product} key={index}>
						<Heading className={styles.title} level={2}>
							{product.title}
						</Heading>
						<Image
							className={styles.image}
							src={product.image}
							alt={product.title}
							width={600}
							height={600}
						/>
						<Paragraph className={styles.description}>
							{product.description}
						</Paragraph>
					</li>
				))}
			</ul>
		</Container>
	)
}

export default Products
