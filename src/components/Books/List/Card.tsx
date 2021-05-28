import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { useHistory } from "react-router";

type Props = {
  id: string;
  title: string;
  author: string;
  cover: string;
};

const BookCard = (props: Props) => {
  const history = useHistory();
  const { id, author, cover, title } = props;
  const [isMobile] = useMediaQuery("(max-width: 425px)");

  const handleDetail = () => {
    history.push(`/book/${id}`);
  };

  return (
    <Flex
      flexDirection="column"
      alignItems={isMobile ? "start" : "center"}
      color="rgba(49, 49, 49, 0.8)"
      fontWeight="bold"
      cursor="pointer"
      onClick={handleDetail}
    >
      <Image src={cover} w="100px" h="150px" mb="3" />
      <Text fontSize="12px">{title}</Text>
      <Text fontSize="12px">{author}</Text>
    </Flex>
  );
};

export default BookCard;
