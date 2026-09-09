import { achievements } from "@/lib/achievements/achievements.data"

describe("achievements.data", () => {
	test("should have correct structure for each achievement", () => {
		Object.values(achievements).forEach(achievement => {
			expect(achievement).toHaveProperty("year")
			expect(achievement).toHaveProperty("title")
			expect(typeof achievement.year).toBe("number")
			expect(typeof achievement.title).toBe("string")
		})
	})

	test("should have valid year", () => {
		achievements.forEach(achievement => {
			const currentYear = new Date().getFullYear()
			const isValidYear =
				achievement.year >= 1900 && achievement.year <= currentYear

			expect(isValidYear).toBe(true)
		})
	})

	test("should be sorted by year in descending order", () => {
		const years = achievements.map(achievement => achievement.year)
		const sortedYears = [...years].sort((a, b) => b - a)

		expect(years).toEqual(sortedYears)
	})

	test("should have valid title", () => {
		achievements.forEach(achievement => {
			const isValidTitle =
				achievement.title.length >= 5 && achievement.title.length <= 35
			expect(isValidTitle).toBe(true)
		})
	})
})
