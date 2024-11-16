export const getHumanizedError = (error: string) => {
  switch (error) {
    case "QUESTION_ALREADY_EXIST":
      return {
        title: "The question already exist!",
        description: "Please try to add another word!",
      };
    case "USER_EMAIL_ALREADY_EXIST":
      return {
        title: "The email address you provided, already exist!",
        description: "Please use another email to create an account.",
      };
    case "USER_DISPLAY_NAME_ALREADY_EXIST":
      return {
        title: "The display name you provided, already exist!",
        description: "Please use another display name to create an account",
      };
    case "UNAUTHORIZED":
      return {
        title: "The email or password are invalid!",
        description: "Double-check and try to sign in again",
      };
    case "UNAUTHENTICATED":
      return {
        title: "Token is invalid!",
        description: "Token is invalid!",
      };
    case "INVALID_EMAIL":
      return {
        title: "There is no account with provided email!",
        description:
          "Please try again or create an account if you don't have any!",
      };
    default:
      return {
        title: "Unknown error!",
        description: "It looks like unknown error!",
      };
  }
};
