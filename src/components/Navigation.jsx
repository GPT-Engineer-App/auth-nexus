import React from "react";
import { Flex, Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Box>
        <Link as={RouterLink} to="/" px={2}>
          Главная
        </Link>
        <Link as={RouterLink} to="/about" px={2}>
          О нас
        </Link>
        <Link as={RouterLink} to="/registration" px={2}>
          Регистрация
        </Link>
        <Link as={RouterLink} to="/login" px={2}>
          Войти
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
