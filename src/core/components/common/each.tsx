import { Children } from "react"

export type EachProps = {
  render: (item: any, index: number) => any
  of: any[]
}

export const Each = ({ render, of }: EachProps) => <>{Children.toArray(of.map((item, index) => render(item, index)))}</>
