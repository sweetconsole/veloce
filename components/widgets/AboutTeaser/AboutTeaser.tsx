import { type FC } from "react"
import { ActionButton, Heading, Container } from "@/components/shared"
import { ROUTES } from "@/utils/routes.config"
import styles from "./AboutTeaser.module.scss"

const AboutTeaser: FC = () => {
	return (
		<Container className={styles.block} tag={"section"}>
			<Heading level={1}>
				Véloce is the ZERO-PROOF aperitif for modern living, crafted with super
				herbs and nutraceuticals to elevate your well-being, without
				compromising the sophisticated ritual of the aperitif.
			</Heading>
			<ActionButton as="link" href={ROUTES.ABOUT}>
				About Us
			</ActionButton>
		</Container>
	)
}

export default AboutTeaser
