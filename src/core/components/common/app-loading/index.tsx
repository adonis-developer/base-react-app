import React from "react"
import "./style.scss"

export default function AppLoading() {
  return (
    <div className="absolute inset-0 bg-white flex justify-center items-center z-50">
      <div className="lds-ripple" />
    </div>
  )
}
