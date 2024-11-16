import { useLocation, Navigate, NavLink } from "react-router-dom";
import { Button, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { getQuizResultText } from "../utils/getQuizResultText.ts";

export const QuizResult = () => {
  const { state } = useLocation();

  if (!state) {
    return <Navigate to="/available-quizzes" />;
  }

  const { quizResult } = state;

  return (
    <SimpleGrid p={4} w="full" spacing={4} h="full">
      <Center flexDirection="column" bg="purple.100" gap={6}>
        <Heading as="h4" w="full" textAlign="center">
          Your score is {quizResult}% 🎉
        </Heading>
        <Text>{getQuizResultText(quizResult)}</Text>
        <NavLink to={`/available-quizzes`}>
          <Button colorScheme="purple">Go back to available quizzes</Button>
        </NavLink>
      </Center>
    </SimpleGrid>
  );
};
