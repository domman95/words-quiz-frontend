import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  SimpleGrid,
  Text,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { AnswersRadioGroup } from "./AnswersRadioGroup.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  GraphQlPossibleAnswer,
  useCheckQuizLazyQuery,
  useCheckUserAnswerLazyQuery,
} from "../types/gql/graphql-types.tsx";

interface QuestionCardProps {
  questionNumber: string;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  nextQuestions: any;
  allQuestionsCount: string;
}
export const QuestionCard = ({
  questionNumber,
  question,
  answer1,
  answer2,
  answer3,
  nextQuestions,
  allQuestionsCount,
}: QuestionCardProps) => {
  const { quizId, questionId }: { quizId: string; questionId: string } =
    useParams();
  const navigate = useNavigate();

  const [checkQuiz] = useCheckQuizLazyQuery();

  const [checkUserAnswer] = useCheckUserAnswerLazyQuery();

  const [buttonText, setButtonText] = useState("Check your answer");
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const { getRootProps, getRadioProps, setValue, value } = useRadioGroup({
    name: "question",
  });

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers"));
    const alreadyAnswered = answers.find(
      (answer) => answer.questionId === questionId,
    );
    if (alreadyAnswered) {
      setValue(alreadyAnswered.userAnswer);
      setIsAnswerChecked(true);
      setIsAnswerCorrect(
        localStorage.getItem("isLastUserAnswerCorrect") === "true",
      );
    }
  }, []);

  console.log("71: isAnswerChecked HA! I KNEW IT!", isAnswerChecked);

  const handleNextQuestion = async () => {
    const question = nextQuestions.shift();
    const _nextQuestions = nextQuestions;
    const questionNumber = allQuestionsCount - +_nextQuestions.length;

    if (question) {
      setValue("");
      navigate(`/quiz/${quizId}/${question.id}`, {
        state: {
          question,
          nextQuestions: _nextQuestions,
          allQuestionsCount,
          questionNumber,
        },
        replace: true,
      });
      setButtonText("Check your answer");
      setIsAnswerCorrect(null);
      setIsAnswerChecked(false);
    } else {
      const answers = JSON.parse(localStorage.getItem("answers"));
      await checkQuiz({
        variables: { quizId, answers },
        onCompleted: (data) => {
          navigate(`/quiz/${quizId}/result`, {
            replace: true,
            state: {
              quizResult: data.checkQuiz,
            },
          });
        },
      });
    }
  };

  const handleCheckUserAnswer = async () => {
    await checkUserAnswer({
      variables: {
        checkUsersAnswerId: questionId,
        usersAnswer: GraphQlPossibleAnswer[value],
      },
      onCompleted: (data) => {
        console.log("113: data HA! I KNEW IT!", data);
        const answers = JSON.parse(localStorage.getItem("answers"));
        const updatedAnswers = JSON.stringify([
          ...answers,
          { questionId: questionId, userAnswer: value },
        ]);
        localStorage.setItem("answers", updatedAnswers);
        setIsAnswerChecked(true);
        setIsAnswerCorrect(data.checkUsersAnswer);
        localStorage.setItem(
          "isLastUserAnswerCorrect",
          data.checkUsersAnswer.toString(),
        );
        if (nextQuestions.length) {
          setButtonText("Next Question");
        } else {
          setButtonText("Check the quiz");
        }
      },
    });
  };

  const handleQuitQuiz = () => {
    navigate(`/available-quizzes`, { replace: true });
    localStorage.removeItem("answers");
  };

  return (
    <SimpleGrid gap={10}>
      <Card borderRadius={10}>
        <CardHeader color="gray.300" fontWeight="semibold" align="left">
          Question #{questionNumber}
        </CardHeader>
        <Divider />
        <CardBody w="full">
          <Center bg="purple.100" p={20} mb={4} borderRadius={10}>
            <Text fontWeight="bold">What does {question} mean?</Text>
          </Center>
          <AnswersRadioGroup
            answers={[{ answer1 }, { answer2 }, { answer3 }]}
            questionId={questionId}
            getRootProps={getRootProps}
            getRadioProps={getRadioProps}
            isAnswerCorrect={isAnswerCorrect}
            isAnswerChecked={isAnswerChecked}
            userAnswer={value}
          />
        </CardBody>
        <CardFooter>
          <VStack w="full">
            <Button
              disabled={!value}
              w="full"
              colorScheme="purple"
              onClick={
                isAnswerChecked ? handleNextQuestion : handleCheckUserAnswer
              }
            >
              {buttonText}
            </Button>
            {value && (
              <Text
                color="orange.500"
                bg="orange.50"
                w="full"
                p={2}
                borderRadius={10}
                align="center"
              >
                {isAnswerChecked
                  ? isAnswerCorrect
                    ? "Wow! That was an amazing shoot, you're good! 🎯"
                    : "Oh, no worries! You'll do that better next time! 🤞"
                  : "Think carefully! No changes after submission 🥸"}
              </Text>
            )}
          </VStack>
        </CardFooter>
      </Card>
      <Button onClick={handleQuitQuiz} color="red.400">
        Quit Quiz
      </Button>
    </SimpleGrid>
  );
};
