import React from "react"

interface Props {
	message: string
}

const ErrorComponent: React.FC<Props> = ({ message }) => {
	return (
		<div className="mt-5 flex flex-col items-center">
			<h2 className="text-xl font-bold">{message}</h2>
			<span>Please try again later</span>
		</div>
	)
}

export default ErrorComponent
