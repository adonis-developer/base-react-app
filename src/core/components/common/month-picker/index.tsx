import { DatePicker, DatePickerProps } from "antd"
import dayjs from "dayjs"
import React from "react"
import "dayjs/locale/ja"
import locale from "antd/es/date-picker/locale/ja_JP"
import DownSolidIcon from "../../icons/DownSolidIcon"

function MonthPicker() {
  const customWeekStartEndFormat: DatePickerProps["format"] = (value: any) =>
    `${dayjs(value).year()}年${dayjs(value).month() + 1}月`
  return (
    <DatePicker
      locale={locale}
      defaultValue={dayjs()}
      format={customWeekStartEndFormat}
      picker="month"
      placeholder="月間"
      suffixIcon={<DownSolidIcon />}
      allowClear={false}
    />
  )
}

export default MonthPicker
