import Contacts from "@/components/contact/Contacts/Contacts"
import styles from "./contact.module.scss"

export default function ContactPage() {
	return (
		<main className={styles.block}>
			<Contacts />
		</main>
	)
}
