"use client"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type FC } from "react"
import { ChessboardPattern, Container, Label } from "@/components/shared"
import { ROUTES } from "@/utils/routes.config"
import styles from "./Footer.module.scss"

const Footer: FC = () => {
	const pathname = usePathname()

	return (
		<footer
			className={clsx(styles.footer, pathname === "/" && styles.accent_footer)}
		>
			<Container className={styles.info}>
				<nav className={styles.info_section}>
					<Link className={styles.link} href={ROUTES.ABOUT}>
						<Label>About</Label>
					</Link>
					<Link className={styles.link} href={ROUTES.CONTACT}>
						<Label>Contact</Label>
					</Link>
				</nav>

				<div className={styles.info_section}>
					<Link className={styles.link} href="tel:6465554567">
						<Label>(646) 555-4567</Label>
					</Link>
					<Link className={styles.link} href="mailto:hello@veloce.com">
						<Label>hello@veloce.com</Label>
					</Link>
				</div>
			</Container>

			<Container className={styles.block}>
				<Image
					className={styles.logo}
					src="big_black_logo.svg"
					alt="Veloce"
					width={575}
					height={193}
				/>
				<p className={styles.copyright}>Veloce© 2025 All Rights Reserved</p>
			</Container>

			<ChessboardPattern />
		</footer>
	)
}

export default Footer
