import { render, screen } from "@testing-library/react"
import Paragraph from "./Paragraph"

describe("Paragraph", () => {
	test("renders the text passed as children", () => {
		render(<Paragraph>Hello, World!</Paragraph>)
		expect(screen.getByText("Hello, World!")).toBeInTheDocument()
	})

	test("merges custom className with variant class", () => {
		render(<Paragraph className="custom">Text</Paragraph>)
		const element = screen.getByText("Text")
		expect(element).toHaveClass("paragraph")
		expect(element).toHaveClass("custom")
	})
})
