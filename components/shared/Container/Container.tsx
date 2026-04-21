import { CSSProperties, type FC, ReactNode } from "react"
import { clsx } from "clsx"
import styles from "./Container.module.scss"

interface ContainerProps {
	children?: ReactNode | ReactNode[]
	className?: string
	style?: CSSProperties
}

const Container: FC<ContainerProps> = ({ children, className, style }) => {
	return (
		<div className={clsx(styles.container, className)} style={style}>
			{children}
		</div>
	)
}

export default Container
