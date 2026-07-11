import clsx from "clsx"
import { type FC } from "react"
import styles from "./Placeholder.module.scss"

interface PlaceholderProps {
	isScrolling: boolean
}

const Placeholder: FC<PlaceholderProps> = ({ isScrolling }) => {
	return (
		<div
			className={clsx(
				styles.placeholder,
				isScrolling && styles.placeholder_active
			)}
		/>
	)
}

export default Placeholder
