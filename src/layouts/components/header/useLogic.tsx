import React, { createContext, useMemo, useState } from "react"

const HeaderLogicContext = createContext({} as HeaderLogicContextType)

export interface HeaderLogicContextType {
  priceGas: any
  setPriceGas: React.Dispatch<React.SetStateAction<any>>
}

function HeaderLogicProvider({ children }: { children: React.ReactNode }) {
  const [priceGas, setPriceGas] = useState<any>({})

  const valuesContext: HeaderLogicContextType = useMemo(
    () => ({
      priceGas,
      setPriceGas,
    }),
    [priceGas, setPriceGas],
  )

  return <HeaderLogicContext.Provider value={valuesContext}>{children}</HeaderLogicContext.Provider>
}

export { HeaderLogicContext, HeaderLogicProvider }
