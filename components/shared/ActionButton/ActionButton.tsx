import clsx from "clsx"
import Link from "next/link"
import { ComponentPropsWithoutRef, type FC } from "react"
import { Label } from "@/components/shared"
import styles from "./ActionButton.module.scss"

type ButtonProps = {
	as?: "button" | "link"
	variant?: "light" | "dark" | "white"
	className?: string
	href?: string
	onClick?: () => void
} & Omit<ComponentPropsWithoutRef<"button">, "onClick" | "className"> &
	Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">

const variants = {
	light: styles.button_light,
	dark: styles.button_dark,
	white: styles.button_white
}

const ActionButton: FC<ButtonProps> = ({
	as = "button",
	variant = "light",
	href = "",
	onClick,
	className,
	...props
}) => {
	if (as == "link") {
		return (
			<Link
				className={clsx(variants[variant], className)}
				href={href}
				onClick={onClick}
				{...props}
			>
				<Label>{props.children}</Label>
			</Link>
		)
	}

	return (
		<button className={clsx(variants[variant], className)} onClick={onClick}>
			<Label>{props.children}</Label>
		</button>
	)
}

export default ActionButton
