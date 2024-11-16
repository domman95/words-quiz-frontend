import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface QuizRemovalModalProps {
  quizName: string;
  isOpen: boolean;
  onClose: () => void;
  handleRemoveQuiz: () => void;
}

export const QuizRemovalModal = ({
  quizName,
  isOpen,
  onClose,
  handleRemoveQuiz,
}: QuizRemovalModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>You are removing the Quiz: {quizName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to remove the Quiz: <b>{quizName}?</b>
        </ModalBody>
        <ModalFooter gap={2}>
          <Button
            w="full"
            colorScheme="gray"
            color="red.500"
            onClick={handleRemoveQuiz}
          >
            <Center gap={2}>
              <DeleteIcon color="red.500" />
              Remove now
            </Center>
          </Button>
          <Button w="full" colorScheme="purple" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
