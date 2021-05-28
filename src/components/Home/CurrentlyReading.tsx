import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import ChapterBookIcon from "../Shared/Icons/ChapterBookIcon";
import originalsCover from "../../assets/original-cover.png";

const CurrentlyReading = () => {
  return (
    <Flex maxHeight="100px" alignItems="center" my="5" bg="#EEF5DB" pl="6">
      <Image w="90px" h="135px" src={originalsCover} />
      <Flex
        ml="3"
        h="80px"
        w="50%"
        color="#E7E7E1"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Text
            fontFamily="Playfair Display"
            fontSize="20px"
            fontWeight="700"
            letterSpacing="2px"
            color="#2A2B26"
          >
            Originals
          </Text>
          <Text fontSize="10px" color="#74776D">
            by Adam Grant
          </Text>
        </Box>
        <Flex alignItems="center" color="#2A2B26">
          <ChapterBookIcon />
          <Text fontSize="10px" ml="2">
            Chapter
          </Text>
          <Text fontSize="10px" mx="1" fontWeight="700" color="#EC6374">
            2
          </Text>
          <Text fontSize="10px">From 9</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CurrentlyReading;
