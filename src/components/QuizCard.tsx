import { Button, Card, CardFooter, CardHeader, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  GetQuizQueryResult,
  GraphQlGetQuizzesQuery,
  GraphQlGetQuizzesQueryVariables,
  useRemoveQuizMutation,
} from "../types/gql/graphql-types.tsx";
import { ApolloQueryResult } from "@apollo/client/core";
import { QuizRemovalModal } from "./QuizRemovalModal.tsx";
import { useState } from "react";

interface QuizCardProps {
  id: string;
  quizName: string;
  refetch: (
    variables?: Partial<GraphQlGetQuizzesQueryVariables>,
  ) => Promise<ApolloQueryResult<GraphQlGetQuizzesQuery>>;
}
export const QuizCard = ({ id, quizName, refetch }: QuizCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [removeQuiz] = useRemoveQuizMutation();

  const handleRemoveQuiz = async () => {
    await removeQuiz({
      variables: {
        removeQuizId: id,
      },
      onCompleted: () => {
        void refetch();
      },
    });
  };

  return (
    <>
      <Card>
        <CardHeader>{quizName}</CardHeader>
        <CardFooter
          display="grid"
          alignItems="center"
          gridTemplateColumns="1fr auto"
          gap="10px"
        >
          <NavLink to={`/quiz/${id}`} style={{ width: "100%" }}>
            <Button colorScheme="purple" w="full">
              Go to quiz
            </Button>
          </NavLink>
          <Button colorScheme="gray" onClick={() => setModalOpen(true)}>
            <DeleteIcon color="red.500" />
          </Button>
        </CardFooter>
      </Card>
      {isModalOpen && (
        <QuizRemovalModal
          quizName={quizName}
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          handleRemoveQuiz={handleRemoveQuiz}
        />
      )}
    </>
  );
};
