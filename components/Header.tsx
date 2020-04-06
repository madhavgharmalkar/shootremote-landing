import React, { FC, useContext } from "react";
import {
  Header as GrommetHeader,
  Box,
  Button,
  Image,
  ResponsiveContext,
  DropButton,
} from "grommet";
import { Menu } from "grommet-icons";
import { WidthWrapper } from "./WidthWrapper";
import { SideNav } from "./SideNav";

export const Header: FC = () => {
  const size = useContext(ResponsiveContext);
  const headerIsSmall = ["small", "medium"].includes(size);

  return (
    <GrommetHeader
      pad={{
        horizontal: "large",
        vertical: headerIsSmall ? "large" : "small",
      }}
    >
      <WidthWrapper align="center">
        <Image src="/logo-color.svg" height={28} />
        {!headerIsSmall && (
          <Box direction="row" gap="small">
            <Button label="About" />
            <Button label="Contact" />
          </Box>
        )}
        {headerIsSmall && <SideNav />}
      </WidthWrapper>
    </GrommetHeader>
  );
};
