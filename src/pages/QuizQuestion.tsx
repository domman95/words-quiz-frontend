import { useLocation } from "react-router-dom";
import { Progress, SimpleGrid } from "@chakra-ui/react";
import { QuestionCard } from "../components/QuestionCard.tsx";

export const QuizQuestion = () => {
  const { state } = useLocation();
  const { question, nextQuestions, questionNumber, allQuestionsCount } = state;

  const calculateProgress = (currentQuestion, totalQuestions) => {
    if (currentQuestion > totalQuestions) return 100;

    return (currentQuestion / totalQuestions) * 100;
  };

  return (
    <SimpleGrid p={4}>
      <Progress
        value={calculateProgress(questionNumber, allQuestionsCount)}
        size="sm"
        colorScheme="purple"
        borderRadius={10}
        mb={4}
      />
      <QuestionCard
        questionNumber={questionNumber}
        question={question.question}
        answer1={question.answer1}
        answer2={question.answer2}
        answer3={question.answer3}
        nextQuestions={nextQuestions}
        allQuestionsCount={allQuestionsCount}
      />
    </SimpleGrid>
  );
};
