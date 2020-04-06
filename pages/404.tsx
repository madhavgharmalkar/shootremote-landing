import React, { FC } from "react";
import { Box, Image, Heading } from "grommet";

const Custom404: FC = () => (
  <Box height="calc(100vh - 130px)" align="center" justify="center">
    <Image src="/tree-swing.svg" alt="404 not found tree swing" height="50%" />
    <Heading level={3}>404 | Not Found</Heading>
  </Box>
);
export default Custom404;
