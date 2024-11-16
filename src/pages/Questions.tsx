import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useGetQuestionsQuery } from "../types/gql/graphql-types.tsx";
import { QuestionCard } from "../components/QuestionCard.tsx";

export const Questions = () => {
  const { data } = useGetQuestionsQuery();

  console.log("7: data HA! I KNEW IT!", data);

  return (
    <SimpleGrid p={4} w="full" spacing={4}>
      <Heading as="h4" w="full">
        List of your questions
      </Heading>
      <Text>Here you can find all questions you've created!</Text>
      <SimpleGrid columns={3} spacing={4}>
        {data &&
          data.getQuestions.map(({ id, question }) => {
            return <QuestionCard id={id} question={question} />;
          })}
      </SimpleGrid>
    </SimpleGrid>
  );
};
