import { render, screen } from "@testing-library/react"
import Heading from "./Heading"

describe("Heading", () => {
	describe("rendering", () => {
		it("renders the text passed as children", () => {
			render(<Heading>Title</Heading>)
			expect(screen.getByText("Title")).toBeInTheDocument()
		})

		it("renders as h3 by default (level=2)", () => {
			render(<Heading>Default</Heading>)
			expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument()
			expect(screen.getByText("Default").tagName).toBe("H3")
		})
	})

	describe("level → tag mapping", () => {
		it("renders h2 when level=1", () => {
			render(<Heading level={1}>Level 1</Heading>)
			expect(screen.getByText("Level 1").tagName).toBe("H2")
			expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
		})

		it("renders h3 when level=2", () => {
			render(<Heading level={2}>Level 2</Heading>)
			expect(screen.getByText("Level 2").tagName).toBe("H3")
			expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument()
		})

		it("renders h4 when level=3", () => {
			render(<Heading level={3}>Level 3</Heading>)
			expect(screen.getByText("Level 3").tagName).toBe("H4")
			expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument()
		})
	})

	describe("CSS classes", () => {
		it("applies heading_1 class for level=1", () => {
			render(<Heading level={1}>Text</Heading>)
			expect(screen.getByText("Text")).toHaveClass("heading_1")
		})

		it("applies heading_2 class for level=2 (default)", () => {
			render(<Heading>Text</Heading>)
			expect(screen.getByText("Text")).toHaveClass("heading_2")
		})

		it("applies heading_3 class for level=3", () => {
			render(<Heading level={3}>Text</Heading>)
			expect(screen.getByText("Text")).toHaveClass("heading_3")
		})

		it("merges custom className with the level class", () => {
			render(
				<Heading level={1} className="custom-class">
					Text
				</Heading>
			)
			const heading = screen.getByText("Text")
			expect(heading).toHaveClass("heading_1")
			expect(heading).toHaveClass("custom-class")
		})
	})

	describe("prop forwarding", () => {
		it("forwards additional HTML attributes to the element", () => {
			render(
				<Heading level={1} id="main-title" data-testid="heading">
					Text
				</Heading>
			)
			const heading = screen.getByTestId("heading")
			expect(heading).toHaveAttribute("id", "main-title")
		})

		it("forwards aria attributes", () => {
			render(<Heading aria-label="Description">Text</Heading>)
			expect(screen.getByLabelText("Description")).toBeInTheDocument()
		})

		it("forwards lang attribute", () => {
			render(<Heading lang="es">Spezia</Heading>)
			expect(screen.getByText("Spezia")).toHaveAttribute("lang", "es")
		})
	})
})
