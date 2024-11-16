import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar.tsx";

interface RootLayoutProps {
  navbar: ReactNode;
}
export const RootLayout = ({ navbar }: RootLayoutProps) => {
  return (
    <Box bg="gray.50" w="100vw" h="100vh">
      <Grid
        templateColumns="1fr"
        templateRows="auto 1fr"
        bg="white"
        h="full"
        maxWidth="1024px"
        margin="0 auto"
      >
        {navbar}
        <GridItem as="main" colSpan="1">
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
};
