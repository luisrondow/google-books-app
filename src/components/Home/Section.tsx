import { Flex, Link, Text } from "@chakra-ui/layout";
import * as React from "react";

type Props = {
  title: string;
  linkText: string;
  hasMargin?: boolean;
  children: React.ReactNode;
};

const HomeSection = (props: Props) => {
  const { title, linkText, hasMargin, children } = props;
  return (
    <Flex w="100%" flexDirection="column" mt="4" ml={hasMargin ? "6" : "0"}>
      <Flex
        w="100%"
        justifyContent="space-between"
        mb="2"
        pr={hasMargin ? "6" : "0"}
      >
        <Text
          as="h3"
          color="#3F4043"
          fontSize="18px"
          ml={!hasMargin ? "6" : "0"}
        >
          {title}
        </Text>
        <Link color="#4ABDF1" fontSize="14px">
          {linkText}
        </Link>
      </Flex>
      {children}
    </Flex>
  );
};

export default HomeSection;
