import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import AppLoading from "~/core/components/common/app-loading"

const EmptyLayout = () => {
  return (
    <>
      <Suspense fallback={<AppLoading />}>
        <Outlet></Outlet>
      </Suspense>
    </>
  )
}

export default EmptyLayout
