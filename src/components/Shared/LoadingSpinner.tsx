import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const LoadingSpinner = () => {
  return (
    <Flex my="3" w="100vw" justifyContent="center">
      <Spinner color="green.400" />
    </Flex>
  );
};

export default LoadingSpinner;
