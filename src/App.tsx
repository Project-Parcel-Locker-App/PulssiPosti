
import { ChakraProvider } from '@chakra-ui/react'

import './App.css'
import UserLoginPage from './pages/UserLoginPage'

function App() {

  return (
    <>
      <ChakraProvider>
        <UserLoginPage />
      </ChakraProvider>
    </>
  )
}

export default App
