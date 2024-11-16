import {
  Button,
  Heading,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  GraphQlGetQuizQuery,
  useGetQuizQuery,
} from "../types/gql/graphql-types.tsx";

export const Quiz = () => {
  const { quizId }: { quizId: string } = useParams();
  const navigate = useNavigate();

  const [{ getQuiz: quiz }, setQuiz] = useState<GraphQlGetQuizQuery>(
    {} as GraphQlGetQuizQuery,
  );

  const { loading } = useGetQuizQuery({
    variables: {
      getQuizId: quizId,
    },
    onCompleted: (data) => {
      setQuiz(data);
    },
  });

  const handleStartQuiz = () => {
    localStorage.setItem("answers", JSON.stringify([]));
    const allQuestionsCount = quiz.questions.length;
    const question = quiz.questions[0];
    const nextQuestions = quiz.questions.slice(1);
    navigate(`/quiz/${quizId}/${quiz.questions[0].id}`, {
      state: {
        question,
        nextQuestions,
        allQuestionsCount,
        questionNumber: allQuestionsCount - nextQuestions?.length,
      },
    });
  };

  return (
    <SimpleGrid p={4} borderRadius={10} w="full" spacing={4}>
      <Skeleton isLoaded={!loading}>
        <Heading as="h4" w="full">
          Quiz: {quiz?.quizName}
        </Heading>
      </Skeleton>
      <SkeletonText isLoaded={!loading}>
        <Text>Would you like to play the quiz?</Text>
      </SkeletonText>
      {!loading && (
        <Button colorScheme="purple" onClick={handleStartQuiz}>
          Start Quiz
        </Button>
      )}
    </SimpleGrid>
  );
};
