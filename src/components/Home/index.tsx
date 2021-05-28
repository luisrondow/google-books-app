import * as React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/layout";
import BooksList from "../Books/List";
import SearchIcon from "../Shared/Icons/SearchIcon";
import HomeFeatures from "./Features";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { BookType } from "../../containers/Book";
import { Error } from "../../containers/Home";

type Props = {
  books: BookType[];
  isIdle: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error;
  setBookSearchQuery: (prevQuery: string) => void;
  setQueried: (prev: boolean) => void;
  handleLoadMore: () => void;
};

const Home = (props: Props) => {
  const {
    isIdle,
    isSuccess,
    isLoading,
    isError,
    setBookSearchQuery,
    setQueried,
    books,
    error,
    handleLoadMore,
  } = props;
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setBookSearchQuery(query);
      setQueried(true);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [query, setBookSearchQuery, setQueried]);

  return (
    <Flex pr="6" py="12" flexDirection="column">
      <InputGroup mb="4" ml="6" pr="6">
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input
          placeholder="Search book"
          bg="#FDFCFC"
          color="#54565A"
          border="none"
          borderRadius="10px"
          focusBorderColor="transparent"
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
      {isLoading && <LoadingSpinner />}
      {isIdle && <HomeFeatures />}
      {isSuccess && <BooksList books={books} handleLoadMore={handleLoadMore} />}
      {isError && (
        <Flex
          px="12"
          my="3"
          w="100vw"
          justifyContent="center"
          flexDirection="column"
        >
          <Text color="red.500">Oops! See what happened:</Text>
          <Text color="red.500">{error.message}</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Home;
