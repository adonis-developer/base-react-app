import React, { createContext, useMemo } from "react"
import { useNavigate } from "react-router-dom"

const IdentityVerificationLogicContext = createContext({} as IdentityVerificationLogicContextType)

export interface IdentityVerificationLogicContextType {
  navigate: ReturnType<typeof useNavigate>
}

function IdentityVerificationLogicProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  const valuesContext: IdentityVerificationLogicContextType = useMemo(
    () => ({
      navigate,
    }),
    [],
  )

  return (
    <IdentityVerificationLogicContext.Provider value={valuesContext}>
      {children}
    </IdentityVerificationLogicContext.Provider>
  )
}

export { IdentityVerificationLogicContext, IdentityVerificationLogicProvider }
