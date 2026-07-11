import Image from "next/image"
import Link from "next/link"
import { type FC } from "react"
import { contacts } from "@/components/about/AboutContact/contact.data"
import { Caption, Heading, PageTitle } from "@/components/shared"
import styles from "./AboutContact.module.scss"

const AboutContact: FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.image_container}>
				<Image
					className={styles.image}
					src="/images/brew_kettle.jpg"
					fill
					alt={""}
				/>
			</div>

			<div className={styles.info}>
				<Caption>Contact</Caption>

				<ul className={styles.contacts}>
					{contacts.map((contact, index) => (
						<li className={styles.contact} key={index}>
							<Heading level={3}>{contact.type}</Heading>

							<Link
								href={contact.link}
								rel="noopener noreferrer"
								target="_blank"
							>
								<Heading level={3}>{contact.value}</Heading>
							</Link>
						</li>
					))}
				</ul>

				<div className={styles.established}>
					<PageTitle>Est.2005</PageTitle>
				</div>
			</div>
		</section>
	)
}

export default AboutContact
