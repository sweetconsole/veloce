import { type FC } from "react"
import { Caption, Container, Heading } from "@/components/shared"
import styles from "./AboutIntro.module.scss"

const AboutIntro: FC = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<Caption>About</Caption>
				<Heading level={1}>
					Véloce represents a new era of the aperitif, where flavor and
					functionality converge in a beautifully crafted, alcohol-free
					beverage.
				</Heading>
			</Container>
		</section>
	)
}

export default AboutIntro
