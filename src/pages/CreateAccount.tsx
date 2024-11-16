import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik, FormikErrors, FormikValues } from "formik";
import { useNavigate } from "react-router-dom";
import { useCreateAccountMutation } from "../types/gql/graphql-types.tsx";
import { getHumanizedError } from "../utils/getHumanizedError.ts";

export const CreateAccount = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [createAccount] = useCreateAccountMutation();

  const validate = (values: FormikValues) => {
    const errors: FormikErrors<FormikValues> = {};

    if (!values.displayName) {
      errors.displayName = "Display name is required!";
    }

    if (!values.email.match(/@/g)) {
      errors.email = 'Invalid email address: missing "@" symbol';
    }

    if (values.password.length <= 6) {
      errors.password = "Password should be over 6 characters!";
    }

    if (values.repeatPassword !== values.password) {
      errors.repeatPassword =
        "Your passwords must match. Please check and try again.";
    }

    return errors;
  };

  return (
    <SimpleGrid
      p={4}
      borderRadius={10}
      w="full"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      h="full"
    >
      <Center flexDirection="column" gap={4}>
        <Heading color="purple.600">Create Account</Heading>
        <Box bg="gray.200" p={6} rounded="md" w="md">
          <Formik
            initialValues={{
              displayName: "",
              email: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={async (
              { displayName, email, password },
              { resetForm },
            ) => {
              await createAccount({
                variables: {
                  user: {
                    displayName,
                    email,
                    password,
                  },
                },
                onCompleted: (data) => {
                  if (data.create.id) {
                    toast({
                      title: "Your account has been created successfully!",
                      description: "You can now sign in here!",
                      duration: 5000,
                      status: "success",
                      isClosable: true,
                    });
                    navigate("/login", { replace: true });
                  }
                },
                onError: (error) => {
                  if (error) {
                    const { title, description } = getHumanizedError(
                      error.message,
                    );
                    toast({
                      title,
                      description,
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    });
                  }
                },
              });
              resetForm({
                values: {
                  displayName: "",
                  email: "",
                  password: "",
                  repeatPassword: "",
                },
              });
            }}
            validate={validate}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={8} align="flex-start">
                  <FormControl
                    isInvalid={!!errors.displayName && !!touched.displayName}
                  >
                    <FormLabel htmlFor="displayName">Display Name</FormLabel>
                    <Field
                      as={Input}
                      id="displayName"
                      name="displayName"
                      type="text"
                      variant="filled"
                      bg="gray.50"
                      _hover={{ backgroundColor: "none" }}
                    />
                    <FormErrorMessage>
                      {errors.displayName as string}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.email && !!touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="text"
                      variant="filled"
                      bg="gray.50"
                      _hover={{ backgroundColor: "none" }}
                    />
                    <FormErrorMessage>
                      {errors.email as string}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && !!touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                      bg="gray.50"
                      _hover={{ backgroundColor: "none" }}
                    />
                    <FormErrorMessage>
                      {errors.password as string}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      !!errors.repeatPassword && Boolean(touched.repeatPassword)
                    }
                  >
                    <FormLabel htmlFor="repeatPassword">
                      Repeat Password
                    </FormLabel>
                    <Field
                      as={Input}
                      id="repeatPassword"
                      name="repeatPassword"
                      type="password"
                      variant="filled"
                      bg="gray.50"
                      _hover={{ backgroundColor: "none" }}
                    />
                    <FormErrorMessage>
                      {errors.repeatPassword as string}
                    </FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" w="full">
                    Create Account
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Center>
    </SimpleGrid>
  );
};
