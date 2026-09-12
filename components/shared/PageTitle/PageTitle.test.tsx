import { render, screen } from "@testing-library/react"
import PageTitle from "./PageTitle"

describe("PageTitle", () => {
	test("renders the text passed as children", () => {
		render(<PageTitle>Hello, World!</PageTitle>)
		expect(screen.getByText("Hello, World!")).toBeInTheDocument()
	})

	test("merges custom className with variant class", () => {
		render(<PageTitle className="custom">Text</PageTitle>)
		const element = screen.getByText("Text")
		expect(element).toHaveClass("title")
		expect(element).toHaveClass("custom")
	})
})
