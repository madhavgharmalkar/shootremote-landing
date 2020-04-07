import React, { FC } from "react";
import { Heading, Box, Image } from "grommet";

const LiveStreamingPage: FC = () => {
  return (
    <Box>
      <Box justify="center" align="center">
        <Heading>Live Streaming</Heading>
        <Image src="/tutorial_video.svg" width="200px" />
      </Box>
      <Box></Box>
    </Box>
  );
};

export default LiveStreamingPage;
