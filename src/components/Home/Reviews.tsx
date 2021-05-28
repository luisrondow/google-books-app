import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import thumb from "../../assets/video-thumb.png";

const HomeReviews = () => {
  return (
    <Flex w="100" pr="6">
      <Image src={thumb} w="100%" />
    </Flex>
  );
};

export default HomeReviews;
