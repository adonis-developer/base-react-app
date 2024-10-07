import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

const fromNow = (date: string) => {
  return dayjs(date).fromNow()
}

function isExpiredDate(dateString: string) {
  const givenDate = dayjs(dateString)
  if (!givenDate.isValid()) {
    return false
  }
  const currentDate = dayjs()
  return currentDate.isAfter(givenDate)
}

function formatDate(format: string, date: string) {
  const time = dayjs(date, format, true)
  if (!time.isValid()) throw Error(`${date} is valid time`)
  return time.format(format)
}

const leadingZeroFormatter = Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})

const yearOptionsMedia = () => {
  const currentYear = dayjs().get("year")
  return Array.from({ length: currentYear - 2018 }).map((_, index) => {
    return {
      label: currentYear - index,
      value: currentYear - index,
    }
  })
}

const monthOptionsMedia = (checkByYear: number) => {
  const currentMonth = dayjs().get("month")
  const currentYear = dayjs().get("year")
  return [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3].map((item) => {
    const month = leadingZeroFormatter.format(item)
    let isDisable = false
    if ((item === 1 || item === 2 || item === 3 || item > currentMonth + 1) && currentYear === checkByYear) {
      isDisable = true
    }

    return {
      label: month + "月",
      value: month,
      disabled: isDisable,
    }
  })
}

export { fromNow, isExpiredDate, formatDate, leadingZeroFormatter, yearOptionsMedia, monthOptionsMedia }
