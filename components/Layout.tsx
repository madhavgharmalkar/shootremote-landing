import React, { FC } from "react";
import { Box, BoxProps } from "grommet";

export const Layout: FC<BoxProps> = ({ children, ...rest }) => (
  <Box
    direction="row"
    fill
    justify="center"
    width={{ max: "1140px" }}
    pad="medium"
    margin="0 auto"
    {...rest}
  >
    {children}
  </Box>
);
