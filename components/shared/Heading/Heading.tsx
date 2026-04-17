import { CSSProperties, type FC, ReactNode, JSX } from "react"
import styles from "./Heading.module.scss"
import clsx from "clsx"

interface HeadingProps {
	children: ReactNode | ReactNode[]
	level?: 1 | 2 | 3
	className?: string
	style?: CSSProperties
}

const classes = {
	1: styles.heading_1,
	2: styles.heading_2,
	3: styles.heading_3
}

const Heading: FC<HeadingProps> = ({
	children,
	level = 2,
	className,
	style
}) => {
	const Tag = `h${level + 1}` as keyof JSX.IntrinsicElements

	return (
		<Tag className={clsx(classes[level], className)} style={style}>
			{children}
		</Tag>
	)
}

export default Heading
