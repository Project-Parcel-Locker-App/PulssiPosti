import React from "react"
import SendParcel from "../../components/screens/SendParcelScreen"
import {userLoaginStatus} from "../../ustils/auth"
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()
  const auth = userLoaginStatus()
  const [authState, setAuthState] = React.useState<boolean | null>(null)
  
  React.useEffect(() => {
    setAuthState(auth)
  }, [auth])
  
  if (!authState) {
    navigate("/")
  }
  
  return (
    <SendParcel />
  );
}

export default LoginPage;
