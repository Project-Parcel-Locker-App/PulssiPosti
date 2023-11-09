import { useState } from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import './App.css'
import UserLoginPage from './pages/UserLoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        <UserLoginPage />
      </ChakraProvider>
    </>
  )
}

export default App
