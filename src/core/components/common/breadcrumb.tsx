import React, { memo } from "react"
import { Breadcrumb } from "antd"
function Breadcrumd({ items = [] }) {
  return <Breadcrumb items={items} />
}

export default memo(Breadcrumd)
