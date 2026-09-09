import { ContactLink, contacts, getContactLinkHref } from "./contacts.data"

describe("contacts.data", () => {
	describe("contacts structure", () => {
		test("should have correct structure", () => {
			contacts.forEach(contact => {
				expect(contact).toHaveProperty("region")
				expect(contact).toHaveProperty("links")
				expect(Array.isArray(contact.links)).toBe(true)
				expect(typeof contact.region).toBe("string")
			})
		})

		test("should have unique regions", () => {
			const regions = contacts.map(c => c.region)
			const uniqueRegions = new Set(regions)

			expect(uniqueRegions.size).toBe(regions.length)
		})

		test("should have at least one link per contact", () => {
			contacts.forEach(contact => {
				expect(contact.links.length).toBeGreaterThan(0)
			})
		})
	})

	describe("contacts links validation", () => {
		const validLinkTypes = ["email", "phone", "address", "url"] as const

		test("should have valid link types", () => {
			contacts.forEach(contact => {
				contact.links.forEach(link => {
					expect(validLinkTypes).toContain(link.type)
				})
			})
		})

		test("should have non-empty title and value", () => {
			contacts.forEach(contact => {
				contact.links.forEach(link => {
					expect(link.title).toBeTruthy()
					expect(link.value).toBeTruthy()
					expect(typeof link.title).toBe("string")
					expect(typeof link.value).toBe("string")
				})
			})
		})
	})

	describe("getContactLinkHref", () => {
		test("should generate correct href for email", () => {
			const emailLink: ContactLink = {
				type: "email",
				title: "Test",
				value: "test@example.com"
			}
			expect(getContactLinkHref(emailLink)).toBe("mailto:test@example.com")
		})

		test("should generate correct href for phone", () => {
			const phoneLink: ContactLink = {
				type: "phone",
				title: "Test",
				value: "+71234567890"
			}
			expect(getContactLinkHref(phoneLink)).toBe("tel:+71234567890")
		})

		test("should return undefined for address", () => {
			const addressLink: ContactLink = {
				type: "address",
				title: "Test",
				value: "ул. Тестовая, 1"
			}
			expect(getContactLinkHref(addressLink)).toBeUndefined()
		})

		test("should return the value as-is for social and website", () => {
			const socialLink: ContactLink = {
				type: "url",
				title: "Test",
				value: "https://instagram.com/test"
			}
			expect(getContactLinkHref(socialLink)).toBe("https://instagram.com/test")
		})
	})

	describe("specific data validation", () => {
		test("should have valid email format", () => {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

			contacts.forEach(contact => {
				contact.links
					.filter(link => link.type === "email")
					.forEach(link => {
						expect(link.value).toMatch(emailRegex)
					})
			})
		})

		test("should have valid phone format", () => {
			const phoneRegex = /^\+?[0-9]{5,15}$/

			contacts.forEach(contact => {
				contact.links
					.filter(link => link.type === "phone")
					.forEach(link => {
						expect(link.value).toMatch(phoneRegex)
					})
			})
		})

		test("should have valid social links format", () => {
			const urlRegex = /^https?:\/\/.+/

			contacts.forEach(contact => {
				contact.links
					.filter(link => link.type === "url")
					.forEach(link => {
						expect(link.value).toMatch(urlRegex)
					})
			})
		})
	})
})
