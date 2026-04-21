import { type Metadata } from "next"
import {
	PageTitle,
	Heading,
	Paragraph,
	Label,
	Caption
} from "@/components/shared"
import styles from "./ui-kit.module.scss"

export const metadata: Metadata = {
	title: "Veloce UI Kit",
	description: ""
}

const UIKitPage = () => {
	return (
		<div className={styles.wrapper}>
			<PageTitle title="Page Title" className={styles.text} />

			<Heading level={1} className={styles.text}>
				Heading 1
			</Heading>
			<Heading level={2} className={styles.text}>
				Heading 2
			</Heading>
			<Heading level={3} className={styles.text}>
				Heading 3
			</Heading>

			<Paragraph>
				body copy 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
				ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat.
			</Paragraph>

			<Label>Label</Label>

			<Caption variant={1}>Caption 1</Caption>
			<Caption variant={2}>Caption 2</Caption>
			<Caption variant={3}>Caption 3</Caption>
			<Caption variant={4}>Caption 4</Caption>
		</div>
	)
}

export default UIKitPage
