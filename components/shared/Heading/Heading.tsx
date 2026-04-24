import clsx from "clsx"
import { type FC, ComponentPropsWithoutRef } from "react"
import styles from "./Heading.module.scss"

type HeadingElement = "h1" | "h2" | "h3" | "h4"

interface HeadingProps extends ComponentPropsWithoutRef<HeadingElement> {
	level?: 1 | 2 | 3
}

const classes = {
	1: styles.heading_1,
	2: styles.heading_2,
	3: styles.heading_3
}

const Heading: FC<HeadingProps> = ({ level = 2, ...props }) => {
	const Tag = `h${level + 1}` as HeadingElement

	return (
		<Tag className={clsx(classes[level], props.className)} {...props}>
			{props.children}
		</Tag>
	)
}

export default Heading
