import { CSSProperties, type FC, ReactNode } from "react"
import clsx from "clsx"
import styles from "./Label.module.scss"

interface LabelProps {
	children: ReactNode | ReactNode[]
	className?: string
	style?: CSSProperties
}

const Label: FC<LabelProps> = ({ children, className, style }) => {
	return (
		<p className={clsx(styles.label, className)} style={style}>
			{children}
		</p>
	)
}

export default Label
