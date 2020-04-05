import React, { FC } from "react";
import { Box, BoxProps } from "grommet";

export const WidthWrapper: FC<BoxProps> = ({ children, ...rest }) => (
  <Box direction="row" fill justify="center">
    <Box
      justify="between"
      align="center"
      direction="row"
      fill
      width={{ max: "1140px" }}
      {...rest}
    >
      {children}
    </Box>
  </Box>
);
