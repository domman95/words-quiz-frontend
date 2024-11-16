export const getQuizResultText = (quizResult: string) => {
  console.log("2: quizResult HA! I KNEW IT!", quizResult);
  if (parseFloat(quizResult) >= parseFloat("96.00")) {
    return "Wow! You achieved an amazing score!";
  }
  if (parseFloat(quizResult) >= parseFloat("80.00")) {
    return "Great! You achieved so great score!";
  }
  if (parseFloat(quizResult) >= parseFloat("50.00")) {
    return "Not bad! More than a half of your answers were correct. You are making a progress!";
  }
  if (parseFloat(quizResult) < parseFloat("50.00")) {
    return "No worries, it's not the end of the world! Keep practicing!";
  }
};
