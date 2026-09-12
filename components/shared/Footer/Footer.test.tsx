import { render, screen } from "@testing-library/react"
import { usePathname } from "next/navigation"
import Footer from "./Footer"

jest.mock("next/navigation", () => ({
	usePathname: jest.fn()
}))

jest.mock("next/image", () => ({
	__esModule: true,
	default: ({ src, alt, width, height, className, ...rest }: any) => (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={className}
		/>
	)
}))

describe("Footer", () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	describe("content", () => {
		beforeEach(() => {
			;(usePathname as jest.Mock).mockReturnValue("/about")
		})

		test("renders navigation links", () => {
			render(<Footer />)

			expect(screen.getByRole("link", { name: "О нас" })).toHaveAttribute(
				"href",
				"/about"
			)
			expect(screen.getByRole("link", { name: "Контакты" })).toHaveAttribute(
				"href",
				"/contact"
			)
		})

		test("renders phone link with tel: protocol", () => {
			render(<Footer />)

			const phoneLink = screen.getByRole("link", { name: "+7 (646) 555-45-67" })
			expect(phoneLink).toHaveAttribute("href", "tel:6465554567")
		})

		test("renders email link with mailto: protocol", () => {
			render(<Footer />)

			const emailLink = screen.getByRole("link", { name: "hello@veloce.com" })
			expect(emailLink).toHaveAttribute("href", "mailto:hello@veloce.com")
		})
	})

	describe("accent styling", () => {
		test("applies accent_footer class on the home page", () => {
			;(usePathname as jest.Mock).mockReturnValue("/")
			const { container } = render(<Footer />)

			const footer = container.querySelector("footer")
			expect(footer).toHaveClass("accent_footer")
		})

		test("does NOT apply accent_footer class on other pages", () => {
			;(usePathname as jest.Mock).mockReturnValue("/about")
			const { container } = render(<Footer />)

			const footer = container.querySelector("footer")
			expect(footer).not.toHaveClass("accent_footer")
		})

		test.each([
			["/about"],
			["/contact"],
			["/mocktails"],
			["/mocktails/lavande"]
		])("does not apply accent class on %s", pathname => {
			;(usePathname as jest.Mock).mockReturnValue(pathname)
			const { container } = render(<Footer />)

			expect(container.querySelector("footer")).not.toHaveClass("accent_footer")
		})
	})
})
