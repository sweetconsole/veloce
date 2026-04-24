import clsx from "clsx"
import { ComponentPropsWithoutRef, type FC } from "react"
import styles from "./Label.module.scss"

const Label: FC<ComponentPropsWithoutRef<"p">> = ({ ...props }) => {
	return (
		<p className={clsx(styles.label, props.className)} {...props}>
			{props.children}
		</p>
	)
}

export default Label
