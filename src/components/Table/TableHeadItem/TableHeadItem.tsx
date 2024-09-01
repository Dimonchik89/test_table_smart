import React from "react"

import { Input } from "../.."
import { ITableHeadItem } from "../../../types/tableHead"

interface Props extends ITableHeadItem {}

const TableHeadItem: React.FC<Props> = ({ title, inputName }) => {
	return (
		<th scope="col" className="px-6 py-3 capitalize">
			<span>{title}</span>
			<Input inputName={inputName} />
		</th>
	)
}

export default TableHeadItem
