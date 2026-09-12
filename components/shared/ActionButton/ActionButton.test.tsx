import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ActionButton } from "@/components/shared"

describe("ActionButton", () => {
	test("renders a <button> by default", () => {
		render(<ActionButton>Buy</ActionButton>)
		const button = screen.getByRole("button", { name: "Buy" })
		expect(button).toBeInTheDocument()
	})

	test('renders a link when as="link" is passed', () => {
		render(
			<ActionButton as="link" href="/about">
				About
			</ActionButton>
		)
		const link = screen.getByRole("link", { name: "About" })
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute("href", "/about")
	})

	test("calls onClick handler when clicked", async () => {
		const handleClick = jest.fn()
		const user = userEvent.setup()

		render(<ActionButton onClick={handleClick}>Click</ActionButton>)
		await user.click(screen.getByRole("button", { name: "Click" }))
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	test("applies the dark variant class", () => {
		render(<ActionButton variant="dark">Dark</ActionButton>)
		expect(screen.getByRole("button", { name: "Dark" })).toHaveClass(
			"button_dark"
		)
	})
})
