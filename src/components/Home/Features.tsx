import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import CurrentlyReading from "./CurrentlyReading";
import DiscoverNewBook from "./DiscoverNewBook";
import HomeReviews from "./Reviews";
import HomeSection from "./Section";

const HomeFeatures = () => {
  return (
    <React.Fragment>
      <Flex w="100%" flexDirection="row" fontSize="2xl" ml="6">
        <Text as="h2" mr="1">
          Hi,
        </Text>
        <Text as="h2" color="#FE6A78" mr="1" fontWeight="600">
          Mehmed Al Fatih
        </Text>
        <Text as="h2">👋</Text>
      </Flex>
      <HomeSection title="Discover new book" linkText="More" hasMargin>
        <DiscoverNewBook />
      </HomeSection>
      <HomeSection title="Currently Reading" linkText="All">
        <CurrentlyReading />
      </HomeSection>
      <HomeSection title="Reviews of The Days" linkText="All Video" hasMargin>
        <HomeReviews />
      </HomeSection>
    </React.Fragment>
  );
};

export default HomeFeatures;
