import Link from "next/link"
import { type FC } from "react"
import { Container, Label } from "@/components/shared"
import { ROUTES } from "@/utils/routes.config"
import styles from "./DefaultHeader.module.scss"

const DefaultHeader: FC = () => {
	return (
		<header className={styles.header}>
			<Container className={styles.container}>
				<Link
					className={styles.logo}
					href={ROUTES.HOME}
					aria-label="Go to home"
				>
					Véloce
				</Link>

				<nav className={styles.navigation}>
					<Link className={styles.link} href={ROUTES.ABOUT}>
						<Label>О нас</Label>
					</Link>
					<Link className={styles.link} href={ROUTES.MOCKTAILS}>
						<Label>Моктейли</Label>
					</Link>
					<Link className={styles.link} href={ROUTES.CONTACT}>
						<Label>Контакты</Label>
					</Link>
				</nav>
			</Container>
		</header>
	)
}

export default DefaultHeader
