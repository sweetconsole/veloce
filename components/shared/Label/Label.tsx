import clsx from "clsx"
import { ComponentPropsWithoutRef, type FC } from "react"
import styles from "./Label.module.scss"

interface LabelProps extends Omit<ComponentPropsWithoutRef<"p">, "className"> {
	className?: string
}

const Label: FC<LabelProps> = ({ className, ...props }) => {
	return (
		<p className={clsx(styles.label, className)} {...props}>
			{props.children}
		</p>
	)
}

export default Label
