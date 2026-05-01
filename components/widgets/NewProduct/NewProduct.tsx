import Image from "next/image"
import { type FC } from "react"
import { Heading, PageTitle } from "@/components/shared"
import styles from "./NewProduct.module.scss"

const NewProduct: FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.info}>
				<Image
					className={styles.tag}
					src="/images/tags/new.svg"
					width={115}
					height={44}
					alt="New"
				/>
				<PageTitle className={styles.title}>Primavera</PageTitle>
				<Heading className={styles.subtitle} level={3}>
					A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.
				</Heading>
			</div>
		</section>
	)
}

export default NewProduct
