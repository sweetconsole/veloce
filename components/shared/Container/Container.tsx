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
	const Tag = tag === "section" ? "section" : "div"

	return (
		<Tag className={clsx(styles.container, className)} {...props}>
			{props.children}
		</Tag>
	)
}

export default Container
