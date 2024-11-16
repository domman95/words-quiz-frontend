import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type GraphQlAnswer = {
  questionId: Scalars['String']['input'];
  userAnswer: GraphQlPossibleAnswer;
};

export type GraphQlCreateQuestionInput = {
  answer1: Scalars['String']['input'];
  answer2: Scalars['String']['input'];
  answer3: Scalars['String']['input'];
  correctAnswer: GraphQlPossibleAnswer;
  question: Scalars['String']['input'];
};

export type GraphQlCreateQuizInput = {
  questionCount: Scalars['Float']['input'];
  quizName: Scalars['String']['input'];
};

export type GraphQlJwt = {
  __typename?: 'JWT';
  access_token: Scalars['String']['output'];
};

export type GraphQlMutation = {
  __typename?: 'Mutation';
  create: GraphQlUser;
  createQuestion: GraphQlQuestion;
  createQuiz: GraphQlQuiz;
  removeQuestion: GraphQlQuestion;
  removeQuiz: GraphQlQuiz;
};


export type GraphQlMutationCreateArgs = {
  user: GraphQlUserInput;
};


export type GraphQlMutationCreateQuestionArgs = {
  createQuestionInput: GraphQlCreateQuestionInput;
};


export type GraphQlMutationCreateQuizArgs = {
  createQuizInput: GraphQlCreateQuizInput;
};


export type GraphQlMutationRemoveQuestionArgs = {
  id: Scalars['String']['input'];
};


export type GraphQlMutationRemoveQuizArgs = {
  id: Scalars['String']['input'];
};

export enum GraphQlPossibleAnswer {
  answer1 = 'answer1',
  answer2 = 'answer2',
  answer3 = 'answer3'
}

export type GraphQlQuery = {
  __typename?: 'Query';
  checkQuiz: Scalars['String']['output'];
  checkUsersAnswer: Scalars['Boolean']['output'];
  getQuestions: Array<GraphQlQuestion>;
  getQuiz: GraphQlQuiz;
  getQuizzes: Array<GraphQlQuiz>;
  signIn: GraphQlJwt;
  user: GraphQlUser;
  users: Array<GraphQlUser>;
};


export type GraphQlQueryCheckQuizArgs = {
  answers: Array<GraphQlAnswer>;
  quizId: Scalars['String']['input'];
};


export type GraphQlQueryCheckUsersAnswerArgs = {
  id: Scalars['String']['input'];
  usersAnswer: GraphQlPossibleAnswer;
};


export type GraphQlQueryGetQuizArgs = {
  id: Scalars['String']['input'];
};


export type GraphQlQuerySignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type GraphQlQuestion = {
  __typename?: 'Question';
  answer1: Scalars['String']['output'];
  answer2: Scalars['String']['output'];
  answer3: Scalars['String']['output'];
  correctAnswer: GraphQlPossibleAnswer;
  id?: Maybe<Scalars['String']['output']>;
  question: Scalars['String']['output'];
};

export type GraphQlQuiz = {
  __typename?: 'Quiz';
  id?: Maybe<Scalars['String']['output']>;
  questions: Array<GraphQlQuestion>;
  quizName: Scalars['String']['output'];
};

export type GraphQlUser = {
  __typename?: 'User';
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type GraphQlUserInput = {
  displayName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type GraphQlCheckQuizQueryVariables = Exact<{
  quizId: Scalars['String']['input'];
  answers: Array<GraphQlAnswer> | GraphQlAnswer;
}>;


export type GraphQlCheckQuizQuery = { __typename?: 'Query', checkQuiz: string };

export type GraphQlCheckUserAnswerQueryVariables = Exact<{
  checkUsersAnswerId: Scalars['String']['input'];
  usersAnswer: GraphQlPossibleAnswer;
}>;


export type GraphQlCheckUserAnswerQuery = { __typename?: 'Query', checkUsersAnswer: boolean };

export type GraphQlCreateAccountMutationVariables = Exact<{
  user: GraphQlUserInput;
}>;


export type GraphQlCreateAccountMutation = { __typename?: 'Mutation', create: { __typename?: 'User', id: string, email: string, password: string } };

export type GraphQlCreateQuestionMutationVariables = Exact<{
  createQuestionInput: GraphQlCreateQuestionInput;
}>;


export type GraphQlCreateQuestionMutation = { __typename?: 'Mutation', createQuestion: { __typename?: 'Question', id?: string | null, question: string, answer1: string, answer2: string, answer3: string, correctAnswer: GraphQlPossibleAnswer } };

export type GraphQlCreateQuizMutationVariables = Exact<{
  createQuizInput: GraphQlCreateQuizInput;
}>;


export type GraphQlCreateQuizMutation = { __typename?: 'Mutation', createQuiz: { __typename?: 'Quiz', id?: string | null } };

export type GraphQlGetQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GraphQlGetQuestionsQuery = { __typename?: 'Query', getQuestions: Array<{ __typename?: 'Question', id?: string | null, question: string, answer1: string, answer2: string, answer3: string, correctAnswer: GraphQlPossibleAnswer }> };

export type GraphQlGetQuizQueryVariables = Exact<{
  getQuizId: Scalars['String']['input'];
}>;


export type GraphQlGetQuizQuery = { __typename?: 'Query', getQuiz: { __typename?: 'Quiz', id?: string | null, quizName: string, questions: Array<{ __typename?: 'Question', id?: string | null, answer1: string, answer2: string, answer3: string, question: string }> } };

export type GraphQlGetQuizzesQueryVariables = Exact<{ [key: string]: never; }>;


export type GraphQlGetQuizzesQuery = { __typename?: 'Query', getQuizzes: Array<{ __typename?: 'Quiz', id?: string | null, quizName: string, questions: Array<{ __typename?: 'Question', id?: string | null }> }> };

export type GraphQlRemoveQuizMutationVariables = Exact<{
  removeQuizId: Scalars['String']['input'];
}>;


export type GraphQlRemoveQuizMutation = { __typename?: 'Mutation', removeQuiz: { __typename?: 'Quiz', id?: string | null } };

export type GraphQlSignInQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type GraphQlSignInQuery = { __typename?: 'Query', signIn: { __typename?: 'JWT', access_token: string } };


export const CheckQuizDocument = gql`
    query CheckQuiz($quizId: String!, $answers: [Answer!]!) {
  checkQuiz(quizId: $quizId, answers: $answers)
}
    `;

/**
 * __useCheckQuizQuery__
 *
 * To run a query within a React component, call `useCheckQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckQuizQuery({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      answers: // value for 'answers'
 *   },
 * });
 */
export function useCheckQuizQuery(baseOptions: Apollo.QueryHookOptions<GraphQlCheckQuizQuery, GraphQlCheckQuizQueryVariables> & ({ variables: GraphQlCheckQuizQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GraphQlCheckQuizQuery, GraphQlCheckQuizQueryVariables>(CheckQuizDocument, options);
      }
export function useCheckQuizLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GraphQlCheckQuizQuery, GraphQlCheckQuizQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GraphQlCheckQuizQuery, GraphQlCheckQuizQueryVariables>(CheckQuizDocument, options);
        }
export function useCheckQuizSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GraphQlCheckQuizQuery, GraphQlCheckQuizQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GraphQlCheckQuizQuery, GraphQlCheckQuizQueryVariables>(CheckQuizDocument, options);
        }
export type CheckQuizQueryHookResult = ReturnType<typeof useCheckQuizQuery>;
export type CheckQuizLazyQueryHookResult = ReturnType<typeof useCheckQuizLazyQuery>;
export type CheckQuizSuspenseQueryHookResult = ReturnType<typeof useCheckQuizSuspenseQuery>;
export type CheckQuizQueryResult = Apollo.QueryResult<GraphQlCheckQuizQuery, GraphQlCheckQuizQueryVariables>;
export const CheckUserAnswerDocument = gql`
    query CheckUserAnswer($checkUsersAnswerId: String!, $usersAnswer: PossibleAnswer!) {
  checkUsersAnswer(id: $checkUsersAnswerId, usersAnswer: $usersAnswer)
}
    `;

/**
 * __useCheckUserAnswerQuery__
 *
 * To run a query within a React component, call `useCheckUserAnswerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckUserAnswerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckUserAnswerQuery({
 *   variables: {
 *      checkUsersAnswerId: // value for 'checkUsersAnswerId'
 *      usersAnswer: // value for 'usersAnswer'
 *   },
 * });
 */
export function useCheckUserAnswerQuery(baseOptions: Apollo.QueryHookOptions<GraphQlCheckUserAnswerQuery, GraphQlCheckUserAnswerQueryVariables> & ({ variables: GraphQlCheckUserAnswerQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GraphQlCheckUserAnswerQuery, GraphQlCheckUserAnswerQueryVariables>(CheckUserAnswerDocument, options);
      }
export function useCheckUserAnswerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GraphQlCheckUserAnswerQuery, GraphQlCheckUserAnswerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GraphQlCheckUserAnswerQuery, GraphQlCheckUserAnswerQueryVariables>(CheckUserAnswerDocument, options);
        }
export function useCheckUserAnswerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GraphQlCheckUserAnswerQuery, GraphQlCheckUserAnswerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GraphQlCheckUserAnswerQuery, GraphQlCheckUserAnswerQueryVariables>(CheckUserAnswerDocument, options);
        }
export type CheckUserAnswerQueryHookResult = ReturnType<typeof useCheckUserAnswerQuery>;
export type CheckUserAnswerLazyQueryHookResult = ReturnType<typeof useCheckUserAnswerLazyQuery>;
export type CheckUserAnswerSuspenseQueryHookResult = ReturnType<typeof useCheckUserAnswerSuspenseQuery>;
export type CheckUserAnswerQueryResult = Apollo.QueryResult<GraphQlCheckUserAnswerQuery, GraphQlCheckUserAnswerQueryVariables>;
export const CreateAccountDocument = gql`
    mutation CreateAccount($user: UserInput!) {
  create(user: $user) {
    id
    email
    password
  }
}
    `;
export type GraphQlCreateAccountMutationFn = Apollo.MutationFunction<GraphQlCreateAccountMutation, GraphQlCreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<GraphQlCreateAccountMutation, GraphQlCreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GraphQlCreateAccountMutation, GraphQlCreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<GraphQlCreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<GraphQlCreateAccountMutation, GraphQlCreateAccountMutationVariables>;
export const CreateQuestionDocument = gql`
    mutation CreateQuestion($createQuestionInput: CreateQuestionInput!) {
  createQuestion(createQuestionInput: $createQuestionInput) {
    id
    question
    answer1
    answer2
    answer3
    correctAnswer
  }
}
    `;
export type GraphQlCreateQuestionMutationFn = Apollo.MutationFunction<GraphQlCreateQuestionMutation, GraphQlCreateQuestionMutationVariables>;

/**
 * __useCreateQuestionMutation__
 *
 * To run a mutation, you first call `useCreateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionMutation, { data, loading, error }] = useCreateQuestionMutation({
 *   variables: {
 *      createQuestionInput: // value for 'createQuestionInput'
 *   },
 * });
 */
export function useCreateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<GraphQlCreateQuestionMutation, GraphQlCreateQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GraphQlCreateQuestionMutation, GraphQlCreateQuestionMutationVariables>(CreateQuestionDocument, options);
      }
export type CreateQuestionMutationHookResult = ReturnType<typeof useCreateQuestionMutation>;
export type CreateQuestionMutationResult = Apollo.MutationResult<GraphQlCreateQuestionMutation>;
export type CreateQuestionMutationOptions = Apollo.BaseMutationOptions<GraphQlCreateQuestionMutation, GraphQlCreateQuestionMutationVariables>;
export const CreateQuizDocument = gql`
    mutation CreateQuiz($createQuizInput: CreateQuizInput!) {
  createQuiz(createQuizInput: $createQuizInput) {
    id
  }
}
    `;
export type GraphQlCreateQuizMutationFn = Apollo.MutationFunction<GraphQlCreateQuizMutation, GraphQlCreateQuizMutationVariables>;

/**
 * __useCreateQuizMutation__
 *
 * To run a mutation, you first call `useCreateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizMutation, { data, loading, error }] = useCreateQuizMutation({
 *   variables: {
 *      createQuizInput: // value for 'createQuizInput'
 *   },
 * });
 */
export function useCreateQuizMutation(baseOptions?: Apollo.MutationHookOptions<GraphQlCreateQuizMutation, GraphQlCreateQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GraphQlCreateQuizMutation, GraphQlCreateQuizMutationVariables>(CreateQuizDocument, options);
      }
export type CreateQuizMutationHookResult = ReturnType<typeof useCreateQuizMutation>;
export type CreateQuizMutationResult = Apollo.MutationResult<GraphQlCreateQuizMutation>;
export type CreateQuizMutationOptions = Apollo.BaseMutationOptions<GraphQlCreateQuizMutation, GraphQlCreateQuizMutationVariables>;
export const GetQuestionsDocument = gql`
    query GetQuestions {
  getQuestions {
    id
    question
    answer1
    answer2
    answer3
    correctAnswer
  }
}
    `;

/**
 * __useGetQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GraphQlGetQuestionsQuery, GraphQlGetQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GraphQlGetQuestionsQuery, GraphQlGetQuestionsQueryVariables>(GetQuestionsDocument, options);
      }
export function useGetQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GraphQlGetQuestionsQuery, GraphQlGetQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GraphQlGetQuestionsQuery, GraphQlGetQuestionsQueryVariables>(GetQuestionsDocument, options);
        }
export function useGetQuestionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GraphQlGetQuestionsQuery, GraphQlGetQuestionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GraphQlGetQuestionsQuery, GraphQlGetQuestionsQueryVariables>(GetQuestionsDocument, options);
        }
export type GetQuestionsQueryHookResult = ReturnType<typeof useGetQuestionsQuery>;
export type GetQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuestionsLazyQuery>;
export type GetQuestionsSuspenseQueryHookResult = ReturnType<typeof useGetQuestionsSuspenseQuery>;
export type GetQuestionsQueryResult = Apollo.QueryResult<GraphQlGetQuestionsQuery, GraphQlGetQuestionsQueryVariables>;
export const GetQuizDocument = gql`
    query GetQuiz($getQuizId: String!) {
  getQuiz(id: $getQuizId) {
    id
    quizName
    questions {
      id
      answer1
      answer2
      answer3
      question
    }
  }
}
    `;

/**
 * __useGetQuizQuery__
 *
 * To run a query within a React component, call `useGetQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizQuery({
 *   variables: {
 *      getQuizId: // value for 'getQuizId'
 *   },
 * });
 */
export function useGetQuizQuery(baseOptions: Apollo.QueryHookOptions<GraphQlGetQuizQuery, GraphQlGetQuizQueryVariables> & ({ variables: GraphQlGetQuizQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GraphQlGetQuizQuery, GraphQlGetQuizQueryVariables>(GetQuizDocument, options);
      }
export function useGetQuizLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GraphQlGetQuizQuery, GraphQlGetQuizQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GraphQlGetQuizQuery, GraphQlGetQuizQueryVariables>(GetQuizDocument, options);
        }
export function useGetQuizSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GraphQlGetQuizQuery, GraphQlGetQuizQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GraphQlGetQuizQuery, GraphQlGetQuizQueryVariables>(GetQuizDocument, options);
        }
export type GetQuizQueryHookResult = ReturnType<typeof useGetQuizQuery>;
export type GetQuizLazyQueryHookResult = ReturnType<typeof useGetQuizLazyQuery>;
export type GetQuizSuspenseQueryHookResult = ReturnType<typeof useGetQuizSuspenseQuery>;
export type GetQuizQueryResult = Apollo.QueryResult<GraphQlGetQuizQuery, GraphQlGetQuizQueryVariables>;
export const GetQuizzesDocument = gql`
    query GetQuizzes {
  getQuizzes {
    id
    quizName
    questions {
      id
    }
  }
}
    `;

/**
 * __useGetQuizzesQuery__
 *
 * To run a query within a React component, call `useGetQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizzesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuizzesQuery(baseOptions?: Apollo.QueryHookOptions<GraphQlGetQuizzesQuery, GraphQlGetQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GraphQlGetQuizzesQuery, GraphQlGetQuizzesQueryVariables>(GetQuizzesDocument, options);
      }
export function useGetQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GraphQlGetQuizzesQuery, GraphQlGetQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GraphQlGetQuizzesQuery, GraphQlGetQuizzesQueryVariables>(GetQuizzesDocument, options);
        }
export function useGetQuizzesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GraphQlGetQuizzesQuery, GraphQlGetQuizzesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GraphQlGetQuizzesQuery, GraphQlGetQuizzesQueryVariables>(GetQuizzesDocument, options);
        }
export type GetQuizzesQueryHookResult = ReturnType<typeof useGetQuizzesQuery>;
export type GetQuizzesLazyQueryHookResult = ReturnType<typeof useGetQuizzesLazyQuery>;
export type GetQuizzesSuspenseQueryHookResult = ReturnType<typeof useGetQuizzesSuspenseQuery>;
export type GetQuizzesQueryResult = Apollo.QueryResult<GraphQlGetQuizzesQuery, GraphQlGetQuizzesQueryVariables>;
export const RemoveQuizDocument = gql`
    mutation RemoveQuiz($removeQuizId: String!) {
  removeQuiz(id: $removeQuizId) {
    id
  }
}
    `;
export type GraphQlRemoveQuizMutationFn = Apollo.MutationFunction<GraphQlRemoveQuizMutation, GraphQlRemoveQuizMutationVariables>;

/**
 * __useRemoveQuizMutation__
 *
 * To run a mutation, you first call `useRemoveQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeQuizMutation, { data, loading, error }] = useRemoveQuizMutation({
 *   variables: {
 *      removeQuizId: // value for 'removeQuizId'
 *   },
 * });
 */
export function useRemoveQuizMutation(baseOptions?: Apollo.MutationHookOptions<GraphQlRemoveQuizMutation, GraphQlRemoveQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GraphQlRemoveQuizMutation, GraphQlRemoveQuizMutationVariables>(RemoveQuizDocument, options);
      }
export type RemoveQuizMutationHookResult = ReturnType<typeof useRemoveQuizMutation>;
export type RemoveQuizMutationResult = Apollo.MutationResult<GraphQlRemoveQuizMutation>;
export type RemoveQuizMutationOptions = Apollo.BaseMutationOptions<GraphQlRemoveQuizMutation, GraphQlRemoveQuizMutationVariables>;
export const SignInDocument = gql`
    query SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    access_token
  }
}
    `;

/**
 * __useSignInQuery__
 *
 * To run a query within a React component, call `useSignInQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignInQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignInQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInQuery(baseOptions: Apollo.QueryHookOptions<GraphQlSignInQuery, GraphQlSignInQueryVariables> & ({ variables: GraphQlSignInQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GraphQlSignInQuery, GraphQlSignInQueryVariables>(SignInDocument, options);
      }
export function useSignInLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GraphQlSignInQuery, GraphQlSignInQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GraphQlSignInQuery, GraphQlSignInQueryVariables>(SignInDocument, options);
        }
export function useSignInSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GraphQlSignInQuery, GraphQlSignInQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GraphQlSignInQuery, GraphQlSignInQueryVariables>(SignInDocument, options);
        }
export type SignInQueryHookResult = ReturnType<typeof useSignInQuery>;
export type SignInLazyQueryHookResult = ReturnType<typeof useSignInLazyQuery>;
export type SignInSuspenseQueryHookResult = ReturnType<typeof useSignInSuspenseQuery>;
export type SignInQueryResult = Apollo.QueryResult<GraphQlSignInQuery, GraphQlSignInQueryVariables>;