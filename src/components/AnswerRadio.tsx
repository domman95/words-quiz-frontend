import { Box, useRadio } from "@chakra-ui/react";

export const AnswerRadio = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const radio = getRadioProps();

  return (
    <Box as="label" w="full">
      <input {...input} disabled={props.isAnswerChecked} />
      <Box
        {...radio}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="20px"
        cursor={props.isAnswerChecked ? "not-allowed" : "pointer"}
        bg="gray.50"
        borderRadius={10}
        border="2px solid #E2E8F0"
        _checked={{
          border: props.isAnswerChecked
            ? props.isAnswerCorrect
              ? "2px solid #48BB78"
              : "2px solid #F56565"
            : "2px solid #D6BCFA",

          backgroundColor: props.isAnswerChecked
            ? props.isAnswerCorrect
              ? "#9AE6B4"
              : "#FEB2B2"
            : "#E9D8FD",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};
