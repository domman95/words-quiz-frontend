import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Quiz } from "./pages/Quiz.tsx";
import { QuizQuestion } from "./pages/QuizQuestion.tsx";
import { CreateQuiz } from "./pages/CreateQuiz.tsx";
import { AvailableQuizzes } from "./pages/AvailableQuizzes.tsx";
import { CreateQuestion } from "./pages/CreateQuestion.tsx";
import { QuizResult } from "./pages/QuizResult.tsx";
import { UserProvider } from "./context/userContext.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "./utils/DataProvider.tsx";
import { PrivateLayout } from "./layouts/PrivateLayout.tsx";
import { PrivateRoutes } from "./utils/PrivateRoutes.tsx";
import { PublicLayout } from "./layouts/PublicLayout.tsx";
import { LoginPage } from "./pages/Login.tsx";
import { Logout } from "./utils/Logout.tsx";
import { CreateAccount } from "./pages/CreateAccount.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Questions } from "./pages/Questions.tsx";

export const App = () => {
  return (
    <UserProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DataProvider />}>
              <Route element={<PrivateLayout />}>
                <Route element={<PrivateRoutes />}>
                  <Route
                    path="/available-quizzes"
                    element={<AvailableQuizzes />}
                  />
                  <Route path="/questions" element={<Questions />} />
                  <Route path="/create-quiz" element={<CreateQuiz />} />
                  <Route path="/create-question" element={<CreateQuestion />} />
                  <Route path="/quiz/:quizId" element={<Quiz />} />
                  <Route
                    path="/quiz/:quizId/:questionId"
                    element={<QuizQuestion />}
                  />
                  <Route path="/quiz/:quizId/result" element={<QuizResult />} />
                </Route>
              </Route>
              <Route element={<PublicLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create-account" element={<CreateAccount />} />
              </Route>
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </UserProvider>
  );
};

export default App;
