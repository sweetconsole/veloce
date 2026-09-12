import { render, screen } from "@testing-library/react"
import { usePathname } from "next/navigation"
import Header from "./Header"

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

describe("Header", () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	describe('on the home page ("/")', () => {
		beforeEach(() => {
			;(usePathname as jest.Mock).mockReturnValue("/")
		})

		it("renders HomeHeader", () => {
			render(<Header />)

			expect(
				screen.getByText(
					"Безалкогольный аперитив для современного образа жизни."
				)
			).toBeInTheDocument()
		})

		it("renders navigation links in HomeHeader", () => {
			render(<Header />)

			expect(screen.getByRole("link", { name: "О Нас" })).toBeInTheDocument()
			expect(screen.getByRole("link", { name: "Моктейли" })).toBeInTheDocument()
			expect(screen.getByRole("link", { name: "Контакты" })).toBeInTheDocument()
		})

		it("renders the logo link to home", () => {
			render(<Header />)

			const logoLink = screen.getByRole("link", { name: "Go to home page" })
			expect(logoLink).toHaveAttribute("href", "/")
		})
	})

	describe("on other pages", () => {
		it.each([["/about"], ["/contact"], ["/mocktails"], ["/mocktails/lavande"]])(
			"renders DefaultHeader on %s",
			pathname => {
				;(usePathname as jest.Mock).mockReturnValue(pathname)
				render(<Header />)

				const logoLink = screen.getByRole("link", { name: "Go to home" })
				expect(logoLink).toBeInTheDocument()
				expect(logoLink).toHaveAttribute("href", "/")
			}
		)

		it("renders all navigation links in DefaultHeader", () => {
			;(usePathname as jest.Mock).mockReturnValue("/about")
			render(<Header />)

			expect(screen.getByRole("link", { name: "О нас" })).toBeInTheDocument()
			expect(screen.getByRole("link", { name: "Моктейли" })).toBeInTheDocument()
			expect(screen.getByRole("link", { name: "Контакты" })).toBeInTheDocument()
		})
	})
})
