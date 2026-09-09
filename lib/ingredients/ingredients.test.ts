import { ingredients } from "@/lib/ingredients/ingredients.data"

describe("ingredients.data", () => {
	test("should have correct structure for each ingredient", () => {
		Object.values(ingredients).forEach(ingredient => {
			expect(ingredient).toHaveProperty("title")
			expect(ingredient).toHaveProperty("image")
			expect(typeof ingredient.title).toBe("string")
			expect(typeof ingredient.image).toBe("string")
		})
	})

	test("should have unique titles", () => {
		const titles = Object.values(ingredients).map(i => i.title)
		const uniqueTitles = new Set(titles)

		expect(uniqueTitles.size).toBe(titles.length)
	})

	test("should have valid image paths", () => {
		Object.values(ingredients).forEach(ingredient => {
			expect(ingredient.image).toMatch(/^\/images\/ingredients\/.+\.png$/)
		})
	})
})
