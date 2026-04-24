import { clsx } from "clsx"
import { ComponentPropsWithoutRef, type FC } from "react"
import styles from "./Container.module.scss"

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
	tag?: "div" | "section"
}

const Container: FC<ContainerProps> = ({ tag = "div", ...props }) => {
	if (tag === "section") {
		return (
			<section className={clsx(styles.container, props.className)} {...props}>
				{props.children}
			</section>
		)
	}

	return (
		<div className={clsx(styles.container, props.className)} {...props}>
			{props.children}
		</div>
	)
}

export default Container
