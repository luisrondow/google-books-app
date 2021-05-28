import { Box, Flex, Text } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import noCoverPlaceholder from "../../../assets/no-cover.gif";
import { BookType } from "../../../containers/Book";
import ArrowBackIcon from "../../Shared/Icons/ArrowBackIcon";
import ReactHtmlParser from "react-html-parser";

type Props = {
  book: BookType;
};

const BookDetail = (props: Props) => {
  const history = useHistory();
  const { book } = props;

  const handleBack = () => {
    history.push("/");
  };

  return (
    <Flex w="100%" px="5" pt="12" pb="8" flexDirection="column">
      <Box w="100%" pl="4" mb="6">
        <Box onClick={handleBack} cursor="pointer">
          <ArrowBackIcon />
        </Box>
      </Box>
      <Flex w="100%" justifyContent="center" mb="8">
        <Box
          w="150px"
          h="235px"
          sx={{
            backgroundImage: `url(${
              book.volumeInfo.imageLinks?.thumbnail || noCoverPlaceholder
            })`,
            boxShadow: "0px 35px 40px -20px rgba(216,216,216,1);",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Flex>
      <Box fontSize="24px" color="#36383A">
        <Text as="span" fontWeight="700" mr="2">
          {book.volumeInfo?.title}
        </Text>
        <Text as="span">{book.volumeInfo?.subtitle}</Text>
      </Box>
      <Text color="#FF6978">
        {book.volumeInfo.authors?.length > 0 ? book.volumeInfo.authors[0] : ""}
      </Text>
      <Box mt="4" fontSize="14px" color="rgba(49, 49, 49, 0.6);">
        {ReactHtmlParser(book.volumeInfo?.description)}
      </Box>
    </Flex>
  );
};

export default BookDetail;
