import { type FC } from "react"
import { ActionButton, Heading } from "@/components/shared"
import { ROUTES } from "@/utils/routes.config"
import styles from "./Intro.module.scss"

const Intro: FC = () => {
	return (
		<section className={styles.intro}>
			<div className={styles.block}>
				<Heading level={2}>
					The only SPIRIT-FREE aperitif that tastes as good as it makes you
					feel.
				</Heading>

				<ActionButton as="link" variant={"dark"} href={ROUTES.CONTACT}>
					Shop now
				</ActionButton>
			</div>
		</section>
	)
}

export default Intro
