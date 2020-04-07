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
import Router from "next/router";

import { Menu } from "grommet-icons";
import { Layout } from "./Layout";
import { SideNav } from "./SideNav";
import { initGA, logPageView } from "../helpers/googleAnalytics";

export const Header: FC = () => {
  const size = useContext(ResponsiveContext);
  const headerIsSmall = ["small", "medium"].includes(size);

  initGA();
  logPageView();

  return (
    <GrommetHeader>
      <Layout align="center" direction="row" justify="between">
        <Anchor href="/">
          <Image src="/logo-color.svg" height={28} alt="ShootRemote logo" />
        </Anchor>

        {!headerIsSmall && (
          <Nav direction="row" gap="medium">
            <Anchor label="About" href="/#what" />
            <Anchor label="Contact" href="/#sign-up" />
          </Nav>
        )}
        {headerIsSmall && <SideNav />}
      </Layout>
    </GrommetHeader>
  );
};
