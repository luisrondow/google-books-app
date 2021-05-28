import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useParams } from "react-router";
import BookDetail from "../components/Books/Detail";
import BookFooterBar from "../components/Shared/BookFooterBar";
import useClient from "../hooks/useClient";
import client from "../services/api-client";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

type QueryParams = {
  id: string;
};

type VolumeInfo = {
  title: string;
  subtitle: string;
  description: string;
  authors: string[];
  imageLinks: {
    thumbnail: string;
  };
};

export type BookType = {
  id: string;
  volumeInfo: VolumeInfo;
};

const Book = () => {
  const { id } = useParams<QueryParams>();
  const { data, error, run, isError, isLoading, isSuccess } = useClient();
  const [book, setBook] = React.useState<BookType | null>(null);

  React.useEffect(() => {
    run(client(`volumes/${id}`));
  }, [id, run]);

  React.useEffect(() => {
    if (data) {
      setBook(data);
    }
  }, [data]);

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="linear-gradient(180deg, #FFF6E5 35%, #FFFCF9 35%);"
    >
      {isLoading && <LoadingSpinner />}
      {book && isSuccess && (
        <>
          <BookDetail book={book} />
          <BookFooterBar />
        </>
      )}
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
    </Box>
  );
};

export default Book;
