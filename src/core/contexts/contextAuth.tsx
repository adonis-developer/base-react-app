import React, { createContext, useMemo, useState } from "react"
import LocalStorage from "../util/storage"
import { LOCAL_STORAGE_KEY } from "../constants"

const AuthLogicGlobalContext = createContext({} as AuthLogicGlobalContextType)

export type AuthObjectType = {
  token: string
  refreshToken: string
}

export interface AuthLogicGlobalContextType {
  authOject: AuthObjectType
  setAuthOject: React.Dispatch<React.SetStateAction<AuthObjectType>>
}

function AuthLogicGlobalProvider({ children }: { children: React.ReactNode }) {
  const initAuth = {
    token: LocalStorage.get(LOCAL_STORAGE_KEY.ACCESS_TOKEN) || "",
    refreshToken: LocalStorage.get(LOCAL_STORAGE_KEY.ACCESS_TOKEN) || "",
  }

  const [authOject, setAuthOject] = useState<AuthObjectType>(initAuth)
  const valuesContext: AuthLogicGlobalContextType = useMemo(
    () => ({
      authOject,
      setAuthOject,
    }),
    [authOject, setAuthOject],
  )

  return <AuthLogicGlobalContext.Provider value={valuesContext}>{children}</AuthLogicGlobalContext.Provider>
}

export { AuthLogicGlobalContext, AuthLogicGlobalProvider }
