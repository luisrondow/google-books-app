import { Box, Flex, Grid, Text } from "@chakra-ui/layout";
import BookOpenedIcon from "./Icons/BookOpenedIcon";
import HeadphoneIcon from "./Icons/HeadphoneIcon";
import ShareIcon from "./Icons/ShareIcon";

const BookFooterBar = () => {
  return (
    <>
      <Box w="100%" h="30px" padding="5" />
      <Flex
        position="fixed"
        bottom="0"
        w="100%"
        height="90px"
        bg="#FFFCF9;"
        justifyContent="center"
      >
        <Grid
          w="80%"
          height="45px"
          gridTemplateColumns="1fr 1fr 1fr"
          bg="#FFF;"
          boxShadow="3px 3px 23px rgba(107, 103, 70, 0.125901)"
        >
          <Flex flexDirection="row" alignItems="center" justifyContent="center">
            <BookOpenedIcon />
            <Text ml="2" fontSize="14px" color="#3F4043" fontWeight="700">
              Read
            </Text>
          </Flex>
          <Flex flexDirection="row" alignItems="center" justifyContent="center">
            <HeadphoneIcon />
            <Text ml="2" fontSize="14px" color="#3F4043" fontWeight="700">
              Listen
            </Text>
          </Flex>
          <Flex flexDirection="row" alignItems="center" justifyContent="center">
            <ShareIcon />
            <Text ml="2" fontSize="14px" color="#3F4043" fontWeight="700">
              Share
            </Text>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default BookFooterBar;
