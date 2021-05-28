import { Box, Flex, Grid, Text } from "@chakra-ui/layout";
import BookIcon from "./Icons/BookIcon";
import HomeIcon from "./Icons/HomeIcon";
import UserIcon from "./Icons/UserIcon";

const FooterBar = () => {
  return (
    <>
      <Box w="100%" h="30px" padding="5" />
      <Grid
        position="fixed"
        bottom="0"
        w="100%"
        height="60px"
        py="3"
        gridTemplateColumns="1fr 1fr 1fr"
        bg="#FFF"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <HomeIcon />
          <Text fontSize="10px" color="#313131">
            Home
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <BookIcon />
          <Text fontSize="10px" color="#BFBEBF">
            Home
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <UserIcon />
          <Text fontSize="10px" color="#BFBEBF">
            Home
          </Text>
        </Flex>
      </Grid>
    </>
  );
};

export default FooterBar;
