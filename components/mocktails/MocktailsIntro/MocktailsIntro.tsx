import { type FC } from "react"
import { Caption, Container, Heading } from "@/components/shared"
import styles from "./MocktailsIntro.module.scss"

const MocktailsIntro: FC = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<Caption className={styles.title}>Наши моктейли</Caption>
				<Heading level={1}>
					Моктейли Véloce — это вкус, который поднимает настроение, и ритуал,
					который вписывается в ваш ритм жизни.
				</Heading>
			</Container>
		</section>
	)
}

export default MocktailsIntro
