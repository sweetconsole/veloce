import { type FC } from "react"
import { Caption, Container, Heading } from "@/components/shared"
import styles from "./AboutIntro.module.scss"

const AboutIntro: FC = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<Caption className={styles.title}>О нас</Caption>
				<Heading level={1}>
					Véloce — это новая эра аперитивов, в которой вкус и функциональность
					сливаются воедино в прекрасно приготовленном безалкогольном напитке.
				</Heading>
			</Container>
		</section>
	)
}

export default AboutIntro
