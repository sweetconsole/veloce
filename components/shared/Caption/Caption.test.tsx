import { render, screen } from "@testing-library/react"
import Caption from "./Caption"

describe("Caption", () => {
	test("renders the text passed as children", () => {
		render(<Caption>Hello, World!</Caption>)
		expect(screen.getByText("Hello, World!")).toBeInTheDocument()
	})

	test("applies the default variant (1) when none is provided", () => {
		render(<Caption>Text</Caption>)
		const element = screen.getByText("Text")
		expect(element).toHaveClass("caption_1")
	})

	test("applies the correct class for a given variant", () => {
		render(<Caption variant={3}>Text</Caption>)
		expect(screen.getByText("Text")).toHaveClass("caption_3")
	})

	test("merges custom className with variant class", () => {
		render(<Caption className="custom">Text</Caption>)
		const element = screen.getByText("Text")
		expect(element).toHaveClass("caption_1")
		expect(element).toHaveClass("custom")
	})
})
