import React, { FC, useState } from "react";
import { Layer, Box, Button, Image, Anchor } from "grommet";
import { Menu, Close } from "grommet-icons";

export const SideNav: FC = ({}) => {
  const [open, setOpen] = useState<boolean | undefined>(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Menu color="brand" />
      </Button>
      {open && (
        <Layer
          animate={false}
          position="right"
          full="vertical"
          onClickOutside={() => setOpen(false)}
          onEsc={() => setOpen(false)}
        >
          <Box pad="large" justify="center" align="center">
            <Box align="end" fill="horizontal">
              <Close
                onClick={() => {
                  setOpen(undefined);
                }}
              />
            </Box>
            <Box margin={{ top: "large" }} gap="medium" align="center">
              <Anchor label="About" />
              <Anchor label="Contact" />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};
