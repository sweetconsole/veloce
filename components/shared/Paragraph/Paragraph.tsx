import clsx from "clsx"
import { ComponentPropsWithoutRef, type FC } from "react"
import styles from "./Paragraph.module.scss"

interface ParagraphProps extends Omit<
	ComponentPropsWithoutRef<"p">,
	"className"
> {
	className?: string
}

const Paragraph: FC<ParagraphProps> = ({ className, ...props }) => {
	return (
		<p className={clsx(styles.paragraph, className)} {...props}>
			{props.children}
		</p>
	)
}

export default Paragraph
