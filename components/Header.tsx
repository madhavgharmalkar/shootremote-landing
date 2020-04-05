import React, { FC } from "react";
import { Header as GrommetHeader, Box, Button, Image } from "grommet";
import { WidthWrapper } from "./WidthWrapper";

export const Header: FC = () => {
  return (
    <GrommetHeader
      pad={{
        horizontal: "large",
        vertical: "small",
      }}
    >
      <WidthWrapper>
        <Image src="/logo-color.svg" height={28} />
        <Box direction="row" gap="small">
          <Button label="About" />
          <Button label="Contact" />
        </Box>
      </WidthWrapper>
    </GrommetHeader>
  );
};
