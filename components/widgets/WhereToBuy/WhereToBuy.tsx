import Image from "next/image"
import { type FC } from "react"
import { Heading } from "@/components/shared"
import styles from "./WhereToBuy.module.scss"

const WhereToBuy: FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.info}>
				<Heading level={2}>
					Experience the refined taste of Véloce. Visit our premium stockists
					for your next alcohol-free aperitif.
				</Heading>
			</div>

			<Image
				className={styles.image}
				src="/images/where_to_buy.jpg"
				alt={""}
				width={1000}
				height={1000}
			/>
		</section>
	)
}

export default WhereToBuy
