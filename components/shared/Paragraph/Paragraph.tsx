import { CSSProperties, type FC, ReactNode } from "react"
import styles from "./Paragraph.module.scss"
import clsx from "clsx"

interface ParagraphProps {
	children: ReactNode | ReactNode[]
	className?: string
	style?: CSSProperties
}

const Paragraph: FC<ParagraphProps> = ({ children, className, style }) => {
	return (
		<p className={clsx(styles.paragraph, className)} style={style}>
			{children}
		</p>
	)
}

export default Paragraph
