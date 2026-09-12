import { render, screen } from "@testing-library/react"
import Container from "./Container"

describe("Container", () => {
	test("renders a <div> by default", () => {
		render(<Container data-testid="container">Контент</Container>)
		const element = screen.getByTestId("container")
		expect(element.tagName).toBe("DIV")
	})

	test('renders a <section> when tag="section" is passed', () => {
		render(
			<Container tag="section" data-testid="container">
				Content
			</Container>
		)
		const element = screen.getByTestId("container")
		expect(element.tagName).toBe("SECTION")
	})

	test("renders children", () => {
		render(<Container>Hello, World!</Container>)
		expect(screen.getByText("Hello, World!")).toBeInTheDocument()
	})

	test("applies the base container class", () => {
		render(<Container data-testid="container">Content</Container>)
		expect(screen.getByTestId("container")).toHaveClass("container")
	})

	test("merges custom className with the base class", () => {
		render(
			<Container className="custom" data-testid="container">
				Content
			</Container>
		)
		const element = screen.getByTestId("container")
		expect(element).toHaveClass("container")
		expect(element).toHaveClass("custom")
	})

	test("forwards other props to the rendered element", () => {
		render(
			<Container id="my-container" data-testid="container">
				Content
			</Container>
		)
		const element = screen.getByTestId("container")
		expect(element).toHaveAttribute("id", "my-container")
	})

	test("renders section with all classes and props", () => {
		render(
			<Container
				tag="section"
				className="custom"
				id="section-id"
				data-testid="container"
			>
				Content
			</Container>
		)
		const element = screen.getByTestId("container")
		expect(element.tagName).toBe("SECTION")
		expect(element).toHaveClass("container")
		expect(element).toHaveClass("custom")
		expect(element).toHaveAttribute("id", "section-id")
	})

	test("renders multiple children", () => {
		render(
			<Container>
				<span>First</span>
				<span>Second</span>
			</Container>
		)
		expect(screen.getByText("First")).toBeInTheDocument()
		expect(screen.getByText("Second")).toBeInTheDocument()
	})
})
