import Image from "next/image"
import { type FC } from "react"
import { Heading, PageTitle } from "@/components/shared"
import styles from "./NewProduct.module.scss"

const NewProduct: FC = () => {
	return (
		<section className={styles.section}>
			<Image
				className={styles.image}
				src="/images/new_product_background.jpg"
				fill
				alt=""
			/>

			<div className={styles.info}>
				<Image
					className={styles.tag}
					src="/images/tags/new.svg"
					width={182}
					height={44}
					alt="Новинка"
				/>

				<PageTitle className={styles.title}>
					Prima
					<wbr />
					vera
				</PageTitle>
				<Heading className={styles.subtitle} level={3}>
					Крепкий пряный аперитив с кардамоном, имбирем и корицей.
				</Heading>
			</div>
		</section>
	)
}

export default NewProduct
