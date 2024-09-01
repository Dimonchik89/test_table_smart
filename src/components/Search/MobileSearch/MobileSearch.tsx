import React from "react"

import { Input } from "../.."
import { tableHeadArr } from "../../../data/tableHead"

const MobileSearch = () => {
	const content = tableHeadArr.map((item) => <Input inputName={item.inputName} />)

	return <div className="grid grid-cols-auto-fit-150 gap-1 lg:hidden">{content}</div>
}

export default MobileSearch
