import Image from "next/image"
import { type FC } from "react"
import { ActionButton, Heading } from "@/components/shared"
import { ROUTES } from "@/utils/routes.config"
import styles from "./Intro.module.scss"

const Intro: FC = () => {
	return (
		<section className={styles.intro}>
			<Image
				className={styles.image}
				src="/images/intro_background.jpg"
				fill
				priority
				alt=""
			/>

			<div className={styles.block}>
				<Heading level={2}>
					Единственный безалкогольный аперитив, который не только хорош на вкус,
					но и поднимает настроение.
				</Heading>

				<ActionButton as="link" variant={"dark"} href={ROUTES.CONTACT}>
					Купить
				</ActionButton>
			</div>
		</section>
	)
}

export default Intro
