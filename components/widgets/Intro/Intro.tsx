import { type FC } from "react"
import styles from "./Intro.module.scss"
import { Button, Heading } from "@/components/shared"

const Intro: FC = () => {
	return (
		<div className={styles.intro}>
			<div className={styles.block}>
				<Heading level={2}>
					The only SPIRIT-FREE aperitif that tastes as good as it makes you
					feel.
				</Heading>

				<Button variant={"dark"}>Shop now</Button>
			</div>
		</div>
	)
}

export default Intro
