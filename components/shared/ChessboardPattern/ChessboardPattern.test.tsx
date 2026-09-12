import { render } from "@testing-library/react"
import ChessboardPattern from "./ChessboardPattern"

describe("ChessboardPattern", () => {
	test("renders a div with the black class by default", () => {
		const { container } = render(<ChessboardPattern />)
		const div = container.firstChild as HTMLElement

		expect(div).toBeInTheDocument()
		expect(div.tagName).toBe("DIV")
		expect(div).toHaveClass("chessboard_black")
	})

	test('renders a div with the black class when color="black"', () => {
		const { container } = render(<ChessboardPattern color="black" />)
		const div = container.firstChild as HTMLElement

		expect(div).toHaveClass("chessboard_black")
		expect(div).not.toHaveClass("chessboard_white")
	})

	test('renders a div with the white class when color="white"', () => {
		const { container } = render(<ChessboardPattern color="white" />)
		const div = container.firstChild as HTMLElement

		expect(div).toHaveClass("chessboard_white")
		expect(div).not.toHaveClass("chessboard_black")
	})

	test("renders exactly one element", () => {
		const { container } = render(<ChessboardPattern />)
		expect(container.childNodes).toHaveLength(1)
	})

	test("renders an empty div (no text content)", () => {
		const { container } = render(<ChessboardPattern />)
		const div = container.firstChild as HTMLElement

		expect(div.textContent).toBe("")
		expect(div.children).toHaveLength(0)
	})
})
