import React, { FC } from "react";
import { Footer as GrommetFooter, Image, Text, Layer } from "grommet";
import { Layout } from "./Layout";

export const Footer: FC = () => (
  <GrommetFooter background="dark-1" height="80px" pad="medium">
    <Layout align="center" justify="between">
      <Image src="/isolated-white.svg" height={20} alt="ShootRemote logo" />
      <Text>&copy; SmartRemote Inc. 2020</Text>
    </Layout>
  </GrommetFooter>
);
