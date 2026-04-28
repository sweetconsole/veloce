"use client"
import { useContext, createContext, ReactNode } from "react"
import { Mocktail } from "@/lib/mocktails.data"

const MocktailContext = createContext<Mocktail | null>(null)

export function useMocktail() {
	const context = useContext(MocktailContext)

	if (!context) {
		throw new Error("useMocktail must be used within MocktailProvider")
	}

	return context
}

interface MocktailProviderProps {
	children: ReactNode | ReactNode[]
	mocktail: Mocktail | null
}

export function MocktailProvider({
	children,
	mocktail
}: MocktailProviderProps) {
	return (
		<MocktailContext.Provider value={mocktail}>
			{children}
		</MocktailContext.Provider>
	)
}
