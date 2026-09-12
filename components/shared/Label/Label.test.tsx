import { render, screen } from "@testing-library/react"
import Label from "./Label"

describe("Label", () => {
	test("renders the text passed as children", () => {
		render(<Label>Hello, World!</Label>)
		expect(screen.getByText("Hello, World!")).toBeInTheDocument()
	})

	test("merges custom className with variant class", () => {
		render(<Label className="custom">Text</Label>)
		const element = screen.getByText("Text")
		expect(element).toHaveClass("label")
		expect(element).toHaveClass("custom")
	})
})
