import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  GraphQlCreateQuizInput,
  useCreateQuizMutation,
} from "../types/gql/graphql-types.tsx";
import { useState } from "react";
import { Field, Formik, FormikErrors, FormikValues } from "formik";

export const CreateQuiz = () => {
  const navigate = useNavigate();

  const [createQuiz] = useCreateQuizMutation();

  const validate = (values) => {
    const errors: FormikErrors<FormikValues> = {};

    if (!values.quizName) {
      errors.quizName = "Quiz name is required!";
    }

    if (values.questionCount <= 0) {
      errors.questionCount = "Question count should be at least one, or more!";
    }

    return errors;
  };
  const handleCreateQuiz = async (createQuizInput: GraphQlCreateQuizInput) => {
    await createQuiz({
      variables: {
        createQuizInput,
      },
      onCompleted: (data) => {
        const quizId = data?.createQuiz.id;
        if (quizId) {
          navigate(`/quiz/${quizId}`);
        }
      },
    });
  };

  return (
    <SimpleGrid p={4} borderRadius={10} w="full" spacing={4}>
      <Heading as="h4" w="full">
        Create Quiz
      </Heading>
      <Text>Would you like to create a new quiz?</Text>
      <Formik
        initialValues={{
          quizName: "",
          questionCount: 10,
        }}
        onSubmit={handleCreateQuiz}
        validate={validate}
      >
        {({ handleSubmit, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={8} align="flex-start">
              <FormControl isInvalid={!!errors.quizName && !!touched.quizName}>
                <FormLabel htmlFor="quizName">Quiz Name:</FormLabel>
                <Field
                  as={Input}
                  id="quizName"
                  name="quizName"
                  type="text"
                  variant="filled"
                  placeholder="Type a name for your quiz..."
                />
                <FormErrorMessage>{errors.quizName as string}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!errors.questionCount && !!touched.questionCount}
              >
                <FormLabel htmlFor="questionCount">Question Count:</FormLabel>
                <Field
                  as={Input}
                  id="questionCount"
                  name="questionCount"
                  type="number"
                  variant="filled"
                />
                <FormErrorMessage>
                  {errors.questionCount as string}
                </FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" w="full">
                Create Quiz
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </SimpleGrid>
  );
};
