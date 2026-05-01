import { type FC } from "react"
import styles from "./ChessboardPattern.module.scss"

interface ChessboardPatternProps {
	color?: "black" | "white"
}

const ChessboardPattern: FC<ChessboardPatternProps> = ({ color = "black" }) => {
	return (
		<div
			className={
				color == "black" ? styles.chessboard_black : styles.chessboard_white
			}
		/>
	)
}

export default ChessboardPattern
