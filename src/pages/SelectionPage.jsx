import React from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";

const SelectionPage = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={6}>
        Registration Selection
      </Heading>
      <VStack spacing={4}>
        <Button colorScheme="blue">Register Users</Button>
        <Button colorScheme="blue">Register Goods</Button>
        <Button colorScheme="blue">Register Stores</Button>
      </VStack>
    </Box>
  );
};

export default SelectionPage;
