import clsx from "clsx"
import { ComponentPropsWithoutRef, type FC } from "react"
import styles from "./Paragraph.module.scss"

const Paragraph: FC<ComponentPropsWithoutRef<"p">> = ({ ...props }) => {
	return (
		<p className={clsx(styles.paragraph, props.className)} {...props}>
			{props.children}
		</p>
	)
}

export default Paragraph
