import { type FC, Fragment } from "react"
import { Caption } from "@/components/shared"
import { contacts } from "./contacts.data"
import styles from "./Contacts.module.scss"

const Contacts: FC = () => {
	return (
		<div className={styles.block}>
			<Caption className={styles.title}>Our Stock lists</Caption>

			<ul className={styles.contacts}>
				{contacts.map((contact, index) => (
					<li className={styles.contact} key={index}>
						<Caption>{contact.region}</Caption>

						<ul className={styles.links}>
							{contact.links.map((link, key) => (
								<Fragment key={key}>
									{link.href ? (
										<a className={styles.link} href={link.href}>
											<Caption>{link.title}</Caption>
										</a>
									) : (
										<Caption>{link.title}</Caption>
									)}
								</Fragment>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Contacts
