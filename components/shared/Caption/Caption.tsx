import { CSSProperties, type FC, ReactNode } from "react"
import clsx from "clsx"
import styles from "./Caption.module.scss"

interface CaptionProps {
	children: ReactNode | ReactNode[]
	variant?: 1 | 2 | 3 | 4
	className?: string
	style?: CSSProperties
}

const variants = {
	1: styles.caption_1,
	2: styles.caption_2,
	3: styles.caption_3,
	4: styles.caption_4
}

const Caption: FC<CaptionProps> = ({
	children,
	variant = 1,
	className,
	style
}) => {
	return (
		<p className={clsx(variants[variant], className)} style={style}>
			{children}
		</p>
	)
}

export default Caption
