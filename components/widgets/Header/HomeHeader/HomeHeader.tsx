import Image from "next/image"
import Link from "next/link"
import { type FC } from "react"
import {
	Container,
	Heading,
	Label,
	ChessboardPattern
} from "@/components/shared"
import { ROUTES } from "@/utils/routes.config"
import styles from "./HomeHeader.module.scss"

const HomeHeader: FC = () => {
	return (
		<header className={styles.header}>
			<Container className={styles.container}>
				<Image
					className={styles.logo}
					src="big_black_logo.svg"
					width={575}
					height={193}
					alt="Veloce"
				/>

				<div className={styles.block}>
					<Heading className={styles.subtitle} level={3}>
						The ZERO-PROOF aperitif for modern living.
					</Heading>

					<nav className={styles.navigation}>
						<Link className={styles.link} href={ROUTES.HOME}>
							<Label>Home</Label>
						</Link>
						<Link className={styles.link} href={ROUTES.ABOUT}>
							<Label>About</Label>
						</Link>
						<Link className={styles.link} href={ROUTES.CONTACT}>
							<Label>Contact</Label>
						</Link>
					</nav>
				</div>
			</Container>

			<ChessboardPattern />
		</header>
	)
}

export default HomeHeader
