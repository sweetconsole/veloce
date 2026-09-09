import { act, renderHook } from "@testing-library/react"
import { useScroll } from "@/hooks/useScroll/useScroll"

describe("useScroll", () => {
	test("should return 0 initially", () => {
		const { result } = renderHook(() => useScroll())
		expect(result.current).toBe(0)
	})

	test("should update scroll random value on window scroll", () => {
		const { result } = renderHook(() => useScroll())
		const scroll = Math.random() * 100

		act(() => {
			window.scrollY = scroll
			window.dispatchEvent(new Event("scroll"))
		})

		expect(result.current).toBe(scroll)
	})
})
