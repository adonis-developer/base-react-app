import { useState, useEffect } from "react"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from "react-router-dom"
import { DefaultLayout } from "./layouts"
import { AccessControl, privateRoutes, publicRoutes } from "./routes"
import AppLoading from "./core/components/common/app-loading"
import EmptyLayout from "./layouts/empty"
import { AuthLogicGlobalProvider } from "./core/contexts/contextAuth"
import { isAuthenticated } from "./core/util/security"
import { AppPath } from "./routes/path"

function PrivateRoute({ children, accessControl }: { children: JSX.Element; accessControl: AccessControl[] }) {
  const { isLogin } = isAuthenticated()

  const permission = AccessControl.PARENT
  if (accessControl.length > 0) {
    if (!accessControl?.includes(permission)) {
      return <Navigate to={AppPath.public.unAuthorized} />
    }
  }
  return isLogin ? <>{children}</> : <Navigate to={AppPath.public.unAuthorized} />
}

function App() {
  const [loading, setLoading] = useState(false)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {privateRoutes.map((route) => {
          const Page = route.component
          switch (route.layout) {
            case null:
              return (
                <Route
                  key={route.path}
                  path="/"
                  element={
                    <PrivateRoute accessControl={route.accessControl ? [...route.accessControl] : []}>
                      <EmptyLayout />
                    </PrivateRoute>
                  }
                >
                  <Route path={route.path} element={<Page />} />;
                </Route>
              )
            default:
              return (
                <Route
                  key={route.path}
                  path="/"
                  element={
                    <PrivateRoute accessControl={route.accessControl ? [...route.accessControl] : []}>
                      <DefaultLayout />
                    </PrivateRoute>
                  }
                >
                  <Route path={route.path} element={<Page />} />;
                </Route>
              )
          }
        })}
        {publicRoutes.map((route) => {
          const Page = route.component
          switch (route.layout) {
            case null:
              return (
                <Route key={route.path} path="/" element={<EmptyLayout />}>
                  <Route path={route.path} element={<Page />}></Route>
                </Route>
              )
            default:
              return (
                <Route key={route.path} path="/" element={<DefaultLayout />}>
                  <Route path={route.path} element={<Page />}></Route>;
                </Route>
              )
          }
        })}

        {/* <Route path="/" element={<DefaultLayout />}>
          <Route path={AppPath.public.notFound} element={<NotFoundPage />} />
        </Route> */}
      </>,
    ),
  )

  useEffect(() => {
    window.addEventListener("beforeunload", () => setLoading(true))
    window.addEventListener("load", () => setLoading(false))

    return () => {
      window.removeEventListener("beforeunload", () => setLoading(true))
      window.removeEventListener("load", () => setLoading(false))
    }
  }, [])

  return loading ? (
    <AppLoading />
  ) : (
    <div className="app">
      <AuthLogicGlobalProvider>
        <RouterProvider router={router} />
      </AuthLogicGlobalProvider>
    </div>
  )
}

export default App
