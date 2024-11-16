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
import { Field, Formik } from "formik";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSignInLazyQuery } from "../types/gql/graphql-types.tsx";
import { UserContext } from "../context/userContext.tsx";
import { getHumanizedError } from "../utils/getHumanizedError.ts";

export const LoginPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { setUser, loggedIn } = useContext(UserContext);

  const [signin] = useSignInLazyQuery({
    onCompleted: (data) => {
      const { access_token: accessToken } = data.signIn;
      setUser({ token: accessToken, displayName: "unknownUser" });
      navigate("/available-quizzes");
    },
    onError: (error) => {
      toast({
        title: error.message,
        status: "error",
        position: "top",
      });
    },
  });

  if (loggedIn) {
    return <Navigate to="/available-quizzes" />;
  }

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
        <Heading color="purple.600">Sign In</Heading>
        <Box bg="gray.200" p={6} rounded="md" w="md">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async ({ email, password }, { resetForm }) => {
              console.log("61: {email, password} HA! I KNEW IT!", {
                email,
                password,
              });
              await signin({
                variables: { email, password },
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
                  email: "",
                  password: "",
                },
              });
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
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
                      validate={(value: string) => {
                        if (!value.match(/@/g)) {
                          return 'Invalid email address: missing "@" symbol';
                        }
                      }}
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
                      validate={(value: string) => {
                        if (value.length <= 6) {
                          return "Password should be over 6 characters!";
                        }
                      }}
                    />
                    <FormErrorMessage>
                      {errors.password as string}
                    </FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="purple" w="full">
                    Sign In
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
