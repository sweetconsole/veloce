import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { type FC } from "react"
import {
	ChessboardPattern,
	Container,
	Heading,
	Label
} from "@/components/shared"
import Placeholder from "@/components/widgets/Header/Placeholder/Placeholder"
import { useScroll } from "@/hooks/useScroll"
import { ROUTES } from "@/utils/routes.config"
import styles from "./HomeHeader.module.scss"

const HomeHeader: FC = () => {
	const scroll = useScroll()
	const isScrolling = scroll > 0

	return (
		<>
			<Placeholder isScrolling={isScrolling} />

			<header
				className={clsx(isScrolling && styles.header_active, styles.header)}
			>
				<Container className={styles.container}>
					<Link
						className={styles.logo}
						href={ROUTES.HOME}
						aria-label="Go to home page"
					>
						<Image
							className={styles.logo_image}
							priority
							src="big_black_logo.svg"
							width={575}
							height={193}
							alt="Veloce"
						/>
					</Link>

					<div className={styles.block}>
						<Heading className={styles.subtitle} level={3}>
							The ZERO-PROOF aperitif for modern living.
						</Heading>

						<nav className={styles.navigation}>
							<Link className={styles.link} href={ROUTES.ABOUT}>
								<Label>About</Label>
							</Link>
							<Link className={styles.link} href={ROUTES.MOCKTAILS}>
								<Label>Mocktails</Label>
							</Link>
							<Link className={styles.link} href={ROUTES.CONTACT}>
								<Label>Contact</Label>
							</Link>
						</nav>
					</div>
				</Container>

				<ChessboardPattern />
			</header>
		</>
	)
}

export default HomeHeader
