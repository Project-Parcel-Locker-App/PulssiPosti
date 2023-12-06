import React from "react"
import DashboardScreen from "../../components/screens/DashboardScreen"
import {userLoaginStatus} from "../../ustils/auth"
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()
  const auth = userLoaginStatus()
  const [authState, setAuthState] = React.useState<boolean>(false)
  React.useEffect(() => {
    setAuthState(auth)
  }, [auth])

  if(!authState){
    navigate("/")
  }
  return (
    <DashboardScreen />
  );
}

export default LoginPage;
