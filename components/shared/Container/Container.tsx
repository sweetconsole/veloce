import { clsx } from "clsx"
import { ComponentPropsWithoutRef, type FC } from "react"
import styles from "./Container.module.scss"

interface ContainerProps extends Omit<
	ComponentPropsWithoutRef<"div">,
	"className"
> {
	tag?: "div" | "section"
	className?: string
}

const Container: FC<ContainerProps> = ({
	tag = "div",
	className,
	...props
}) => {
	if (tag === "section") {
		return (
			<section className={clsx(styles.container, className)} {...props}>
				{props.children}
			</section>
		)
	}

	return (
		<div className={clsx(styles.container, className)} {...props}>
			{props.children}
		</div>
	)
}

export default Container
