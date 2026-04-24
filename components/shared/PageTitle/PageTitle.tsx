import clsx from "clsx"
import { ComponentPropsWithoutRef, type FC } from "react"
import styles from "./PageTitle.module.scss"

const PageTitle: FC<ComponentPropsWithoutRef<"h1">> = ({ ...props }) => {
	return (
		<h1 className={clsx(styles.title, props.className)} {...props}>
			{props.children}
		</h1>
	)
}

export default PageTitle
