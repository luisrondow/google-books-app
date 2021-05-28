import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading:
      "SF Pro Display, -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
    body: "SF Pro Display, -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#FFFCF9",
        color: "#3F4043",
      },
    },
  },
});
