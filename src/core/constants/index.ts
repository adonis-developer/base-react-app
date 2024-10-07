/**
 * REGEX
 */
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/

/**
 * VARIABLE
 */

export const LOCAL_STORAGE_KEY = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  KID_ID: "KID_ID",
  SCHOOL_ACTIVE: "SCHOOL_ACTIVE",
  SCHOOL_ID: "SCHOOL_ID",
  MONTH_ACTIVE: "MONTH_ACTIVE",
  YEAR_ACTIVE: "YEAR_ACTIVE",
}

export const APP_ENV = {
  PRODUCTION: "production",
  DEV: "development",
  LOCAL: "local",
}

export const DAY_FORMAT = {
  VN: "DD/MM/YYYY",
  JP: "YYYY/MM/DD",
}

export const SHOOL_YEAR_JP = [
  {
    label: "04月",
    value: "04",
  },
  {
    label: "05月",
    value: "05",
  },
  {
    label: "06月",
    value: "06",
  },
  {
    label: "07月",
    value: "07",
  },
  {
    label: "08月",
    value: "08",
  },
  {
    label: "09月",
    value: "09",
  },
  {
    label: "10月",
    value: "10",
  },
  {
    label: "11月",
    value: "11",
  },
  {
    label: "12月",
    value: "12",
  },
  {
    label: "01月",
    value: "01",
  },
  {
    label: "02月",
    value: "02",
  },
  {
    label: "03月",
    value: "03",
  },
]

export const AZURE_BLOB_CONTAINER_NAME = "upload-video/"
