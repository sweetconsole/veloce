import Image from "next/image"
import { type FC } from "react"
import {
	Caption,
	ChessboardPattern,
	Heading,
	PageTitle
} from "@/components/shared"
import { achievements } from "@/lib/achievements.data"
import styles from "./AboutAchievements.module.scss"

const AboutAchievements: FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.info}>
				<Caption>Recognition</Caption>

				<ul className={styles.achievements}>
					{achievements.map((achievement, index) => (
						<li className={styles.achievement} key={index}>
							<Caption>{achievement.year}</Caption>
							<Heading level={3}>{achievement.title}</Heading>
						</li>
					))}
				</ul>
			</div>

			<div className={styles.block}>
				<div className={styles.empty} />
				<div className={styles.founder}>
					<Image
						className={styles.tag}
						src="/images/tags/founder.svg"
						alt={""}
						width={177}
						height={44}
					/>
					<PageTitle>Mike Vera</PageTitle>
					<ChessboardPattern color={"white"} />
				</div>
			</div>
		</section>
	)
}

export default AboutAchievements
