import clsx from "clsx"
import Link from "next/link"
import { ComponentPropsWithoutRef, type FC } from "react"
import { Label } from "@/components/shared"
import styles from "./ActionButton.module.scss"

type ButtonProps = {
	as?: "button" | "link"
	variant?: "light" | "dark"
	href?: string
	onClick?: () => void
} & Omit<ComponentPropsWithoutRef<"button">, "onClick"> &
	Omit<ComponentPropsWithoutRef<typeof Link>, "href">

const variants = {
	light: styles.button_light,
	dark: styles.button_dark
}

const ActionButton: FC<ButtonProps> = ({
	as = "button",
	variant = "light",
	href = "",
	onClick,
	...props
}) => {
	if (as == "link") {
		return (
			<Link
				className={clsx(variants[variant], props.className)}
				href={href}
				onClick={onClick}
				{...props}
			>
				<Label>{props.children}</Label>
			</Link>
		)
	}

	return (
		<button className={clsx(variants[variant], props.className)}>
			<Label>{props.children}</Label>
		</button>
	)
}

export default ActionButton
