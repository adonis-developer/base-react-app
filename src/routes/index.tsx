import { lazy } from "react"
import { AppPath } from "./path"

const IdentityVerificationView = lazy(() => import("../pages/auth"))

export enum AccessControl {
  PARENT = "PARENT",
}

const publicRoutes: Array<{
  path: string
  exact?: boolean
  component: any
  layout?: string | null
}> = [{ path: AppPath.public.identityVerification, component: IdentityVerificationView }]

const privateRoutes: Array<{
  path: string
  exact?: boolean
  component: any
  layout?: string | null
  accessControl?: AccessControl[]
}> = []

export { publicRoutes, privateRoutes }
