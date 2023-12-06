import React from "react"
import UserLoginScreen from "../../components/screens/UserLoginScreen"
import {userLoaginStatus} from "../../ustils/auth"
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()
  const auth = userLoaginStatus()
  const [authState, setAuthState] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    setAuthState(auth)
  }, [auth])

  if(authState){
    navigate("/dashboard")
  }
  
  return (
    <UserLoginScreen />
  );
}

export default LoginPage;
