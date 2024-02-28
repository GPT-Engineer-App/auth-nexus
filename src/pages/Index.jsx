import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Heading, Text, useToast } from "@chakra-ui/react";
import { FaLock, FaUser } from "react-icons/fa";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    // This is where you would handle the login logic
    // For now, we'll just show a toast message
    toast({
      title: "Login Attempted",
      description: "This is just a UI example. Authentication isn't implemented here.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Authorization Service</Heading>
          <Text>Login to access your account</Text>
        </Box>
        <Box my={4} textAlign="left">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} icon={<FaUser />} />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} icon={<FaLock />} />
            </FormControl>
            <Button width="full" mt={4} type="submit" leftIcon={<FaLock />}>
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
