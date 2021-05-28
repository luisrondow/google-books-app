import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import thumb from "../../assets/video-thumb.png";

const HomeReviews = () => {
  const [isMobileOrTablet] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex w="100" pr="6">
      <Image src={thumb} w={isMobileOrTablet ? "100%" : "25%"} />
    </Flex>
  );
};

export default HomeReviews;
