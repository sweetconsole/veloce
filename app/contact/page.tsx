import Image from "next/image"
import Contacts from "@/components/contact/Contacts/Contacts"
import styles from "./contact.module.scss"

export default function ContactPage() {
	return (
		<main className={styles.block}>
			<Image
				className={styles.image}
				src="/images/contact_background.jpg"
				fill
				priority
				alt=""
			/>

			<Contacts />
		</main>
	)
}
