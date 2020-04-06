import React, { FC, useContext, useEffect } from "react";
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
import { initGA, logPageView } from "../helpers/googleAnalytics";

export const Header: FC = () => {
  const size = useContext(ResponsiveContext);
  const headerIsSmall = ["small", "medium"].includes(size);

  initGA();
  logPageView();

  return (
    <GrommetHeader
      pad={{
        horizontal: "large",
        vertical: size === "small" ? "large" : "small",
      }}
    >
      <WidthWrapper align="center">
        <Image src="/logo-color.svg" height={28} alt="ShootRemote logo" />
        {!headerIsSmall && (
          <Nav direction="row" gap="medium">
            <Anchor label="About" href="#what" />
            <Anchor label="Contact" href="#sign-up" />
          </Nav>
        )}
        {headerIsSmall && <SideNav />}
      </WidthWrapper>
    </GrommetHeader>
  );
};
