import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext.tsx";

const graphqlUrl = "http://localhost:3000/graphql";
export const DataProvider = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const errorLink: ApolloLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => {
        console.log("22: message HA! I KNEW IT!", message);
        if (message === "Context creation failed: jwt malformed") {
          void logout();
          navigate("/login");
        }
        if (message === "Context creation failed: jwt expired") {
          void logout();
          navigate("/login");
        }
        if (message === "UNAUTHENTICATED") {
          void logout();
          navigate("/login");
        }
      });
    }
  });

  const authLink = setContext((_, { headers }) => {
    const currentToken = localStorage.getItem("token");
    if (!currentToken) {
      return {
        headers,
      };
    }
    return {
      headers: {
        ...headers,
        authorization: currentToken || "",
        "Content-Type": "application/json",
      },
    };
  });

  const link = from([errorLink, authLink, new HttpLink({ uri: graphqlUrl })]);

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  );
};
