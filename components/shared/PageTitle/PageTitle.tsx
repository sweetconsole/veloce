import clsx from "clsx"
import { ComponentPropsWithoutRef, type FC } from "react"
import styles from "./PageTitle.module.scss"

interface HeadingProps extends Omit<
	ComponentPropsWithoutRef<"h1">,
	"className"
> {
	className?: string
}

const PageTitle: FC<HeadingProps> = ({ className, ...props }) => {
	return (
		<h1 className={clsx(styles.title, className)} {...props}>
			{props.children}
		</h1>
	)
}

export default PageTitle
