import { act, renderHook } from "@testing-library/react"
import { mocktails } from "@/lib/mocktails.data"
import { useMocktail, MocktailProvider } from "./useMocktail"

describe("useMocktail", () => {
	test("should throw an error when used outside of MocktailProvider", () => {
		expect(() => renderHook(() => useMocktail())).toThrow(
			"useMocktail must be used within MocktailProvider"
		)
	})

	test("should return mocktail data when used inside MocktailProvider", () => {
		const testMocktail = mocktails[0]

		const { result } = renderHook(() => useMocktail(), {
			wrapper: ({ children }) => (
				<MocktailProvider mocktail={testMocktail}>{children}</MocktailProvider>
			)
		})

		expect(result.current).toEqual(testMocktail)
	})

	test("should return null when mocktail prop in null", () => {
		const { result } = renderHook(() => useMocktail(), {
			wrapper: ({ children }) => (
				<MocktailProvider mocktail={null}>{children}</MocktailProvider>
			)
		})

		expect(result.current).toBeNull()
	})
})
