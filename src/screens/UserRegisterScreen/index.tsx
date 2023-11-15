import { useState } from 'react';
import { Input, Button, Box, Text } from '@chakra-ui/react';

function SignupForm() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    try {
      // Send a POST request to your server with the username and password
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      // Display a success message or handle errors
      if (response.status === 200) {
        console.log('Signup successful:', data.message);
        // Redirect the user to the login page or another page
      } else {
        console.error('Signup failed:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderColor="#870939"
      borderWidth="2px"
      borderRadius="8px"
      p={20}
    >
      <Box mb={10} textAlign="left">
        <Text mb={2} color="#870939">Username</Text>
        <Input
          placeholder="Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          focusBorderColor="#870939"
          width="300px" 
          height="40px" 
          borderRadius="8px"
        />
      </Box>
      <Box mb={10} textAlign="left">
        <Text mb={2} color="#870939">Password</Text>
        <Input
          placeholder="Enter Your Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          focusBorderColor="#870939"
          width="300px" 
          height="40px" 
          borderRadius="8px"
        />
      </Box >
      <Button
        _hover={{ bgColor: '#000000' }}
        bgColor="#870939"
        colorScheme="#00000"
        onClick={handleSubmit}
        width="300px" 
        height="50px" 
        borderRadius="8px"
        mt={6}
      >
        <Text color="white">Log In</Text>
      </Button>
    </Box>
  );
}

export default SignupForm;
