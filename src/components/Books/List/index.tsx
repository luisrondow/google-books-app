import { Flex, Grid } from "@chakra-ui/layout";
import { BookType } from "../../../containers/Book";
import BookCard from "./Card";
import noCoverPlaceholder from "../../../assets/no-cover.gif";
import { Button } from "@chakra-ui/button";

type Props = {
  books: BookType[];
  handleLoadMore: () => void;
};

const BooksList = (props: Props) => {
  const { books, handleLoadMore } = props;

  return (
    <>
      <Grid gridTemplateColumns="1fr 1fr 1fr" columnGap="3" rowGap="6" ml="6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book?.volumeInfo?.title}
            author={`by: ${
              book.volumeInfo.authors?.length > 0
                ? book.volumeInfo.authors[0]
                : ""
            }`}
            cover={book.volumeInfo.imageLinks?.thumbnail || noCoverPlaceholder}
          />
        ))}
      </Grid>
      <Flex w="100%" justifyContent="center" mt="4">
        <Button colorScheme="teal" size="md" onClick={handleLoadMore}>
          Load more
        </Button>
      </Flex>
    </>
  );
};

export default BooksList;
