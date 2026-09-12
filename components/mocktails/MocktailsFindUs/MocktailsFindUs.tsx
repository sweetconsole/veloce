import Image from "next/image"
import { type FC } from "react"
import { ActionButton, Heading } from "@/components/shared"
import { ROUTES } from "@/utils/routes.config"
import styles from "./MocktailsFindUs.module.scss"

const MocktailsFindUs: FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.info}>
				<Heading level={2} className={styles.title}>
					Точки Véloce — в самых тёплых кафе. Вкусная еда, уют и наш аперитив
					ждут вас. Заходите и попробуйте сами.
				</Heading>

				<ActionButton as="link" variant="white" href={ROUTES.CONTACT}>
					Наши точки
				</ActionButton>
			</div>

			<div className={styles.image_container}>
				<Image
					className={styles.image}
					src="/images/find_us.jpg"
					alt=""
					fill
					sizes="100%"
				/>
			</div>
		</section>
	)
}

export default MocktailsFindUs
