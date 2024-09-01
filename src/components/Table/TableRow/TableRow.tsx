import React from "react"

import { User } from "../../../types/user"

interface Props {
	user: User
}

const TableRow: React.FC<Props> = ({ user }) => {
	return (
		<tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
			<td scope="row" className="px-6 py-4" data-label="Name">
				{user?.name}
			</td>
			<td className="px-6 py-4" data-label="User Name">
				{user?.username}
			</td>
			<td className="px-6 py-4" data-label="Email">
				{user?.email}
			</td>
			<td className="px-6 py-4" data-label="Phone">
				{user?.phone}
			</td>
		</tr>
	)
}

export default TableRow
