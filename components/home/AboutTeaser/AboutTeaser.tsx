import { type FC } from "react"
import { ActionButton, Heading, Container } from "@/components/shared"
import { ROUTES } from "@/utils/routes.config"
import styles from "./AboutTeaser.module.scss"

const AboutTeaser: FC = () => {
	return (
		<Container className={styles.block} tag={"section"}>
			<Heading level={1}>
				Véloce — это безалкогольные напитки для современного образа жизни. Они
				созданы, чтобы улучшать ваше самочувствие, не отказываясь от ритуала
				аперитива.
			</Heading>
			<ActionButton as="link" href={ROUTES.ABOUT}>
				О Нас
			</ActionButton>
		</Container>
	)
}

export default AboutTeaser
