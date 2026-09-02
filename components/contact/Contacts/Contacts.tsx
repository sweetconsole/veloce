import { type FC } from "react"
import { Caption } from "@/components/shared"
import { contacts } from "../../../lib/contacts.data"
import styles from "./Contacts.module.scss"

const Contacts: FC = () => {
	return (
		<div className={styles.block}>
			<Caption className={styles.title}>Наши контакты</Caption>

			<ul className={styles.contacts}>
				{contacts.map((contact, index) => (
					<li className={styles.contact} key={index}>
						<Caption>{contact.region}</Caption>

						<ul className={styles.links}>
							{contact.links.map((link, key) => (
								<li key={key}>
									{link.href ? (
										<a className={styles.link} href={link.href}>
											<Caption>{link.title}</Caption>
										</a>
									) : (
										<Caption>{link.title}</Caption>
									)}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Contacts
