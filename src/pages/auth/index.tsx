import IdentityVerificationComponent from "./components/identity-verification"

import { IdentityVerificationLogicProvider } from "./contextLogix"

function IdentityVerificationView() {
  return (
    <IdentityVerificationLogicProvider>
      <IdentityVerificationComponent />
    </IdentityVerificationLogicProvider>
  )
}

export default IdentityVerificationView
