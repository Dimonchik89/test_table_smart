import React, { PropsWithChildren } from "react"

import { Footer, Header } from ".."

interface Props extends PropsWithChildren {}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<main className="min-h-screen flex flex-col layout">
			<Header />
			<div className="flex-auto">{children}</div>
			<Footer />
		</main>
	)
}

export default Layout
