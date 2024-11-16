import { HStack, useRadioGroup, VStack } from "@chakra-ui/react";
import { AnswerRadio } from "./AnswerRadio.tsx";

export const AnswersRadioGroup = (props) => {
  const group = props.getRootProps();

  return (
    <VStack {...group} w="100%">
      {props.answers.map((answer, index) => {
        const answerKey = Object.keys(answer)[0];
        const answerValue = Object.values(answer)[0];
        return (
          <AnswerRadio
            key={index}
            {...props.getRadioProps({ value: answerKey })}
            isAnswerCorrect={props.isAnswerCorrect}
            isAnswerChecked={props.isAnswerChecked}
            userAnswer={props.userAnswer}
            answer={answer}
          >
            {answerValue}
          </AnswerRadio>
        );
      })}
    </VStack>
  );
};
