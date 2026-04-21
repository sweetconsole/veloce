import { CSSProperties, type FC, ReactNode } from "react"
import clsx from "clsx"
import { Label } from "@/components/shared"
import styles from "./Button.module.scss"

interface ButtonProps {
	children?: ReactNode | ReactNode[]
	className?: string
	style?: CSSProperties
	variant?: "light" | "dark"
}

const variants = {
	light: styles.button_light,
	dark: styles.button_dark
}

const Button: FC<ButtonProps> = ({
	children,
	className,
	style,
	variant = "light"
}) => {
	return (
		<button className={clsx(variants[variant], className)} style={style}>
			<Label>{children}</Label>
		</button>
	)
}

export default Button
