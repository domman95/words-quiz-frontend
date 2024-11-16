import {
  Box,
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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  GraphQlCreateQuestionInput,
  GraphQlPossibleAnswer,
  useCreateQuestionMutation,
  useCreateQuizMutation,
} from "../types/gql/graphql-types.tsx";
import { useState } from "react";
import {
  ErrorMessage,
  Field,
  Formik,
  FormikErrors,
  FormikValues,
} from "formik";
import { getHumanizedError } from "../utils/getHumanizedError.ts";

export const CreateQuestion = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [createQuestion] = useCreateQuestionMutation();

  const handleCreateQuestion = async (
    createQuestionInput: GraphQlCreateQuestionInput,
  ) => {
    await createQuestion({
      variables: {
        createQuestionInput,
      },
      onCompleted: (data) => {
        if (data.createQuestion.id) {
          createQuestionInput.question = "";
          createQuestionInput.answer1 = "";
          createQuestionInput.answer2 = "";
          createQuestionInput.answer3 = "";
          createQuestionInput.correctAnswer = "" as GraphQlPossibleAnswer;

          toast({
            title: "New question added successfully!",
            description: `You successfully added a new question ${data.createQuestion.question}`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      },
      onError: (error) => {
        if (error) {
          const { title, description } = getHumanizedError(error.message);
          toast({
            title,
            description,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          createQuestionInput.question = "";
          createQuestionInput.answer1 = "";
          createQuestionInput.answer2 = "";
          createQuestionInput.answer3 = "";
          createQuestionInput.correctAnswer = "" as GraphQlPossibleAnswer;
        }
      },
    });
  };

  const validate = (values: FormikValues) => {
    const errors: FormikErrors<FormikValues> = {};

    if (!values.question) {
      errors.question = "Question is required!";
    }

    if (!values.answer1) {
      errors.answer1 = "Answer 1 is required!";
    }

    if (!values.answer2) {
      errors.answer2 = "Answer 2 is required!";
    }

    if (!values.answer3) {
      errors.answer3 = "Answer 3 is required!";
    }

    if (!values.correctAnswer) {
      errors.correctAnswer = "Correct answer must be selected!";
    }

    return errors;
  };

  return (
    <SimpleGrid p={4} borderRadius={10} w="full" spacing={4}>
      <Heading as="h4" w="full">
        Create Question
      </Heading>
      <Text>Would you like to create a new question?</Text>
      <VStack>
        <Box w="full">
          <Formik
            initialValues={{
              question: "",
              answer1: "",
              answer2: "",
              answer3: "",
              correctAnswer: "",
            }}
            onSubmit={handleCreateQuestion}
            validate={validate}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={8} align="flex-start">
                  <FormControl
                    isInvalid={!!errors.question && !!touched.question}
                  >
                    <FormLabel htmlFor="question">Question:</FormLabel>
                    <Field
                      as={Input}
                      id="question"
                      name="question"
                      type="text"
                      variant="filled"
                    />
                    <FormErrorMessage>
                      {errors.question as string}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.answer1 && !!touched.answer1}
                  >
                    <FormLabel htmlFor="answer1">Answer 1:</FormLabel>
                    <Field
                      as={Input}
                      id="answer1"
                      name="answer1"
                      type="text"
                      variant="filled"
                    />
                    <FormErrorMessage>
                      {errors.answer1 as string}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.answer2 && !!touched.answer2}
                  >
                    <FormLabel htmlFor="answer2">Answer 2:</FormLabel>
                    <Field
                      as={Input}
                      id="answer2"
                      name="answer2"
                      type="text"
                      variant="filled"
                    />
                    <FormErrorMessage>
                      {errors.answer2 as string}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.answer3 && !!touched.answer3}
                  >
                    <FormLabel htmlFor="answer3">Answer 3:</FormLabel>
                    <Field
                      as={Input}
                      id="answer3"
                      name="answer3"
                      type="text"
                      variant="filled"
                    />
                    <FormErrorMessage>
                      {errors.answer3 as string}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      !!errors.correctAnswer && !!touched.correctAnswer
                    }
                  >
                    <FormLabel htmlFor="correctAnswer">
                      Correct Answer:
                    </FormLabel>
                    <Field
                      as={Select}
                      id="correctAnswer"
                      name="correctAnswer"
                      placeholder="Select correct answer"
                      variant="filled"
                    >
                      <option value="answer1">Answer 1</option>
                      <option value="answer2">Answer 2</option>Crtea
                      <option value="answer3">Answer 3</option>
                    </Field>
                    <FormErrorMessage>
                      {errors.correctAnswer as string}
                    </FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" w="full">
                    Submit
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </VStack>
    </SimpleGrid>
  );
};
