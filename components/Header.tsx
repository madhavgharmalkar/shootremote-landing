import React, { FC, useContext } from "react";
import {
  Header as GrommetHeader,
  Box,
  Button,
  Image,
  ResponsiveContext,
  DropButton,
  Nav,
  Anchor,
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
        vertical: size === "small" ? "large" : "small",
      }}
    >
      <WidthWrapper align="center">
        <Image src="/logo-color.svg" height={28} />
        {!headerIsSmall && (
          <Nav direction="row" gap="medium">
            <Anchor label="About" />
            <Anchor label="Contact" />
          </Nav>
        )}
        {headerIsSmall && <SideNav />}
      </WidthWrapper>
    </GrommetHeader>
  );
};
