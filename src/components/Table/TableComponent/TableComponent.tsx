import React from "react"

import { MobileSearch, TableHead, TableRow } from "../.."
import { User } from "../../../types/user"

interface Props {
	users: User[]
}

const TableComponent: React.FC<Props> = ({ users = [] }) => {
	const content = users.map((item) => <TableRow key={item.id} user={item} />)

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<MobileSearch />
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<TableHead />
				<tbody>{content}</tbody>
			</table>
		</div>
	)
}

export default TableComponent
