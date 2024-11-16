import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  List,
  VStack,
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex as="nav" bg="purple.300" justify="space-between" align="center" p={4}>
      <NavLink to="/available-quizzes">
        <Heading as="h2" fontSize="18px" color="white" fontWeight="extrabold">
          Word Quiz
        </Heading>
      </NavLink>
      <HStack spacing={4}>
        <NavLink to="/create-question">
          <Button colorScheme="gray" p={2} borderRadius={10}>
            Create Question
          </Button>
        </NavLink>
        <NavLink to="/create-quiz">
          <Button colorScheme="gray" p={2} borderRadius={10}>
            Create Quiz
          </Button>
        </NavLink>
        <NavLink to="/available-quizzes">
          <Button colorScheme="gray" p={2} borderRadius={10}>
            Available Quizzes
          </Button>
        </NavLink>
        <NavLink to="/logout">
          <Button colorScheme="yellow" p={2} borderRadius={10}>
            Logout
          </Button>
        </NavLink>
      </HStack>
    </Flex>
  );
};
