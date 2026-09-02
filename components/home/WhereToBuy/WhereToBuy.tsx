import Image from "next/image"
import { type FC } from "react"
import { Heading } from "@/components/shared"
import styles from "./WhereToBuy.module.scss"

const WhereToBuy: FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.info}>
				<Heading level={2}>
					Почувствуйте изысканный вкус Véloce. Посетите наши рестораны
					премиум-класса, чтобы приобрести следующий безалкогольный аперитив.
				</Heading>
			</div>

			<div className={styles.image_container}>
				<Image
					className={styles.image}
					src="/images/where_to_buy.jpg"
					alt=""
					fill
					sizes="100%"
				/>
			</div>
		</section>
	)
}

export default WhereToBuy
