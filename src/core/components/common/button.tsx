import { ReactNode } from "react"

type TypeProps = {
  children: ReactNode
  className?: string
  handleClick?: () => any
}

export const ButtonPrimary = ({ children, className, handleClick }: TypeProps) => {
  return (
    <button onClick={handleClick} className={`border-none outline-none ${className}`}>
      {children}
    </button>
  )
}
