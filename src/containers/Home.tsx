import * as React from "react";
import { Box } from "@chakra-ui/layout";
import HomeComponent from "../components/Home";
import FooterBar from "../components/Shared/FooterBar";
import client from "../services/api-client";
import { BookType } from "./Book";
import useClient from "../hooks/useClient";

export type Error = {
  message: string;
};

const Home = () => {
  const { data, error, run, isIdle, isError, isLoading, isSuccess, setStatus } =
    useClient();
  const [bookSearchQuery, setBookSearchQuery] = React.useState("");
  const [startIndex, setStartIndex] = React.useState(0);
  const [books, setBooks] = React.useState<BookType[]>([]);
  const [queried, setQueried] = React.useState(false);

  const handleLoadMore = () => setStartIndex((prevState) => prevState + 12);

  React.useEffect(() => {
    setBooks([]);
    if (queried && bookSearchQuery) {
      run(
        client(
          `volumes?q=${bookSearchQuery}&startIndex=${startIndex}&maxResults=12`
        )
      );
    } else {
      setStatus("idle");
      setStartIndex(1);
    }
  }, [bookSearchQuery, queried, run, setStatus, startIndex]);

  React.useEffect(() => {
    if (data) {
      setBooks((prevState) => [...prevState, ...data.items]);
    }
  }, [data]);

  return (
    <Box w="100vw" h="100vh">
      <HomeComponent
        {...{
          books,
          isIdle,
          isLoading,
          isSuccess,
          isError,
          setBookSearchQuery,
          error,
          setQueried,
          handleLoadMore,
        }}
      />
      <FooterBar />
    </Box>
  );
};

export default Home;
