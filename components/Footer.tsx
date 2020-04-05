import React, { FC } from "react";
import { Footer as GrommetFooter, Image, Text } from "grommet";
import { WidthWrapper } from "./WidthWrapper";

export const Footer: FC = () => (
  <GrommetFooter background="dark-1" height="80px" pad="medium">
    <WidthWrapper>
      <Image src="/logo-white.svg" height={28} />
      <Text>&copy; SmartRemote Inc. 2020</Text>
    </WidthWrapper>
  </GrommetFooter>
);
