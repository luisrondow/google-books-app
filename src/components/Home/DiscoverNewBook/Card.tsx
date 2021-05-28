import { Box, Flex, Text } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import BarsIcon from "../../Shared/Icons/BarsIcon";

type Props = {
  id: string;
  bookName: string;
  authorName: string;
  raiting: number;
  bookCoverImage: string;
  color: string;
};

const DiscoverNewBookCard = (props: Props) => {
  const history = useHistory();
  const { id, authorName, bookCoverImage, bookName, color, raiting } = props;

  return (
    <Flex
      onClick={() => history.push(`/book/${id}`)}
      cursor="pointer"
      px="6"
      py="3"
      w="272px"
      h="139px"
      bg={color}
      borderRadius="5px"
      justifyContent="space-between"
    >
      <Flex
        w="50%"
        color="#E7E7E1"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Text
            fontFamily="Playfair Display"
            fontSize="27px"
            fontWeight="700"
            color="#FEFEFE"
          >
            {bookName}
          </Text>
          <Text fontSize="14px" fontStyle="italic">
            {authorName}
          </Text>
        </Box>
        <Flex alignItems="center">
          <BarsIcon />
          <Text fontSize="10px" fontWeight="700" mx="1">
            {raiting}+
          </Text>
          <Text fontSize="10px">Read Now</Text>
        </Flex>
      </Flex>
      <Box
        w="72px"
        h="111px"
        borderRadius="5px"
        sx={{
          backgroundImage: `url(${bookCoverImage})`,
          backgroundSize: "cover",
        }}
      />
    </Flex>
  );
};

export default DiscoverNewBookCard;
