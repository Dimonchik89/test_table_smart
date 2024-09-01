import React from "react"

import { filteredUsers } from "../../store/filteredSlice/filteredSlice"
import { search } from "../../store/filteredSlice/selectors"
import { AppDispatch } from "../../store/store"
import { InputName } from "../../types/inputName"

import { bindActionCreators } from "@reduxjs/toolkit"
import { connect, ConnectedProps } from "react-redux"
import { createStructuredSelector } from "reselect"

interface Props extends PropsFromRedux {
	inputName: InputName
}

const Input: React.FC<Props> = ({ inputName, search, filteredUsers }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		filteredUsers({ name: inputName, value })
	}

	return (
		<div className="relative mt-1 flex items-center">
			<div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
				<svg
					className="w-4 h-4 text-gray-500 dark:text-gray-400"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>
			</div>
			<input
				type="text"
				id="table-search"
				className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg max-w-80 w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder={`Search for ${inputName}`}
				value={search[inputName]}
				onChange={handleChange}
				name={inputName}
			/>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	search,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	filteredUsers: bindActionCreators(filteredUsers, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Input)
