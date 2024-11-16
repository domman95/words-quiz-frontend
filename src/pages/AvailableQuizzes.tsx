import { useGetQuizzesQuery } from "../types/gql/graphql-types.tsx";
import { Button, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { QuizCard } from "../components/QuizCard.tsx";

export const AvailableQuizzes = () => {
  const { data, refetch } = useGetQuizzesQuery();
  return (
    <SimpleGrid p={4} w="full" spacing={4}>
      <Heading as="h4" w="full">
        List of available quizzes
      </Heading>
      <Text>Here you can find all quizzes available for you to play with!</Text>
      <SimpleGrid columns={3} spacing={4}>
        {data &&
          data.getQuizzes.map(({ id, quizName }) => {
            return (
              <QuizCard
                key={id}
                id={id}
                quizName={quizName}
                refetch={refetch}
              />
            );
          })}
      </SimpleGrid>
    </SimpleGrid>
  );
};
