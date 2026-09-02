import Link from "next/link"
import { type FC } from "react"
import { Container, PageTitle } from "@/components/shared"
import { mocktails } from "@/lib/mocktails.data"
import { ROUTES } from "@/utils/routes.config"
import styles from "./Menu.module.scss"

const Menu: FC = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.menu}>
				{mocktails.map((mocktail, index) => (
					<Link
						className={styles.link}
						href={`${ROUTES.MOCKTAILS}/${mocktail.slug}`}
						key={index}
					>
						<PageTitle className={styles.title}>{mocktail.title}</PageTitle>
					</Link>
				))}

				<Link className={styles.accent_link} href={ROUTES.CONTACT}>
					<PageTitle className={styles.title}>Find Us</PageTitle>
				</Link>
			</Container>
		</section>
	)
}

export default Menu
