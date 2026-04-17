import { type Metadata } from "next"
import { PageTitle, Heading, Paragraph } from "@/components/shared"

export const metadata: Metadata = {
	title: "Veloce UI Kit",
	description: ""
}

const UIKitPage = () => {
	return (
		<div
			style={{
				padding: "20px",
				display: "flex",
				flexDirection: "column",
				gap: "50px",
				maxWidth: "80%"
			}}
		>
			<PageTitle title="Page Title" style={{ color: "black" }} />

			<Heading level={1} style={{ color: "black" }}>
				Heading 1
			</Heading>
			<Heading level={2} style={{ color: "black" }}>
				Heading 2
			</Heading>
			<Heading level={3} style={{ color: "black" }}>
				Heading 3
			</Heading>

			<Paragraph>
				body copy 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
				ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat.
			</Paragraph>
		</div>
	)
}

export default UIKitPage
