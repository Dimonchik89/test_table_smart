import React from "react"

import { TableHeadItem } from "../.."
import { tableHeadArr } from "../../../data/tableHead"
import { ITableHeadItem } from "../../../types/tableHead"

const TableHead = () => {
	const content = tableHeadArr.map((item) => <TableHeadItem key={item.inputName} {...item} />)

	return (
		<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>{content}</tr>
		</thead>
	)
}

export default TableHead
