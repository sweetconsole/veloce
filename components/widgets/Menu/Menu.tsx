import Link from "next/link"
import { type FC } from "react"
import { Container, PageTitle } from "@/components/shared"
import { ROUTES } from "@/utils/routes.config"
import styles from "./Menu.module.scss"

const Menu: FC = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.menu}>
				<PageTitle className={styles.title}>Lavande</PageTitle>
				<PageTitle className={styles.title}>Spezia</PageTitle>
				<PageTitle className={styles.title}>Primavera</PageTitle>

				<Link className={styles.link} href={ROUTES.CONTACT}>
					<PageTitle>Find Us</PageTitle>
				</Link>
			</Container>
		</section>
	)
}

export default Menu
