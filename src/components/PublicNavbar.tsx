import { Button, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

export const PublicNavbar = () => {
  const location = useLocation();
  return (
    <Flex as="nav" bg="purple.300" justify="space-between" align="center" p={4}>
      <NavLink to="/available-quizzes">
        <Heading as="h2" fontSize="18px" color="white" fontWeight="extrabold">
          Word Quiz
        </Heading>
      </NavLink>
      <HStack spacing={4}>
        <NavLink
          to={
            location.pathname === "/create-account"
              ? "/login"
              : "/create-account"
          }
        >
          <Button colorScheme="yellow" p={2} borderRadius={10}>
            {location.pathname === "/create-account"
              ? "Sign In"
              : "Create Account"}
          </Button>
        </NavLink>
      </HStack>
    </Flex>
  );
};
