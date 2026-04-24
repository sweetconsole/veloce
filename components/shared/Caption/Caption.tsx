import clsx from "clsx"
import { ComponentPropsWithoutRef, type FC } from "react"
import styles from "./Caption.module.scss"

interface CaptionProps extends Omit<
	ComponentPropsWithoutRef<"p">,
	"className"
> {
	variant?: 1 | 2 | 3 | 4
	className?: string
}

const variants = {
	1: styles.caption_1,
	2: styles.caption_2,
	3: styles.caption_3,
	4: styles.caption_4
}

const Caption: FC<CaptionProps> = ({ variant = 1, className, ...props }) => {
	return (
		<p className={clsx(variants[variant], className)} {...props}>
			{props.children}
		</p>
	)
}

export default Caption
