import { CSSProperties, type FC } from "react"
import styles from "./PageTitle.module.scss"
import clsx from "clsx"

interface PageTitleProps {
	title: string
	className?: string
	style?: CSSProperties
}

const PageTitle: FC<PageTitleProps> = ({ title, className, style }) => {
	return (
		<h1 className={clsx(styles.title, className)} style={style}>
			{title}
		</h1>
	)
}

export default PageTitle
