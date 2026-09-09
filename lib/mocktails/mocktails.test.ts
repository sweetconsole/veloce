import {
	getMocktailBySlug,
	getAllMocktailSlugs,
	mocktails
} from "@/lib/mocktails/mocktails.data"

describe("mocktails.data", () => {
	describe("getMocktailBySlug", () => {
		const testMocktail = mocktails[0]

		test("should return a mocktail by it`s slug", () => {
			const result = getMocktailBySlug(testMocktail.slug)

			expect(result).toBeDefined()
			expect(result?.title).toBe(testMocktail.title)
		})

		test("should be case-insensitive", () => {
			const result = getMocktailBySlug(testMocktail.slug.toUpperCase())

			expect(result).toBeDefined()
			expect(result).toEqual(testMocktail)
			expect(result?.title).toBe(testMocktail.title)
		})

		test("should return undefined for a non-existent slug", () => {
			const result = getMocktailBySlug("non-existent")
			expect(result).toBeUndefined()
		})

		test("should return undefined for an empty string", () => {
			const result = getMocktailBySlug("")
			expect(result).toBeUndefined()
		})
	})

	describe("getAllMocktailSlugs", () => {
		test("should return an array of slug objects for all mocktails", () => {
			const slugs = getAllMocktailSlugs()

			expect(Array.isArray(slugs)).toBe(true)
			expect(slugs).toHaveLength(mocktails.length)

			slugs.forEach((slugObject, index) => {
				expect(slugObject).toHaveProperty("slug")
				expect(typeof slugObject.slug).toBe("string")

				const expectedSlug = mocktails[index].slug.toLowerCase()
				expect(slugObject.slug).toBe(expectedSlug)
			})
		})

		test("should return slugs in the same order as mocktails array", () => {
			const slugs = getAllMocktailSlugs()

			slugs.forEach((slugObject, index) => {
				expect(slugObject.slug).toBe(mocktails[index].slug.toLowerCase())
			})
		})
	})
})
