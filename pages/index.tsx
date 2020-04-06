import { useContext, FC, useState, useCallback } from "react";
import Head from "next/head";
import {
  Box,
  Heading,
  Button,
  Text,
  Image,
  ResponsiveContext,
  Paragraph,
  Grid,
  Form,
  FormField,
  TextInput,
  Select,
  Diagram,
  Stack,
  List,
} from "grommet";
import { scroller } from "react-scroll";

import { WidthWrapper } from "../components/WidthWrapper";
import { encodeForm } from "../helpers/encodeForm";

const Home: FC = () => {
  const size = useContext(ResponsiveContext);

  const rows = size === "small" ? ["auto", "auto"] : ["auto"];
  const columns = size === "small" ? ["auto"] : ["1/2", "1/2"];
  const areas = size === "small" ? [["left"], ["right"]] : [["left", "right"]];
  const areasReverse =
    size === "small" ? [["right"], ["left"]] : [["left", "right"]];

  const [value, setValue] = useState({});
  return (
    <Box pad={{ horizontal: "large" }}>
      <Head>
        <title>ShootRemote | Control Your Camera Remotely</title>
      </Head>
      <WidthWrapper>
        <Grid
          fill
          rows={rows}
          columns={columns}
          areas={areasReverse}
          align="center"
          gap="medium"
        >
          <Box gridArea="left">
            <Heading textAlign="start" margin={{ vertical: "small" }}>
              Don't waste time playing with settings
            </Heading>
            <Heading level="3">
              ShootRemote lets you control your camera programatically
            </Heading>
            <Box direction="row" gap="small" fill justify="center">
              <Button
                label={<Text color="white">Join our Beta</Text>}
                primary
                onClick={() => scroller.scrollTo("sign-up", {})}
              />
              <Button label="Learn More" />
            </Box>
          </Box>
          <Box gridArea="right">
            <Image src="/videographer.svg" width="100%" />
          </Box>
        </Grid>
      </WidthWrapper>

      <Box id="what" margin="medium">
        <WidthWrapper direction="column">
          <Heading level="2">What is ShootRemote?</Heading>
          <Grid
            rows={rows}
            columns={columns}
            areas={areas}
            gap="medium"
            align="center"
            justify="center"
          >
            <Box gridArea="left">
              <Paragraph>
                ShootRemote is a tool designed to let you create productively.
                It was created to allow creators to quickly check and change
                camera settings whithout having to be interuppted. ShootRemote
                is an excellent tool for:
              </Paragraph>
            </Box>
            <Box gridArea="right">
              <List
                data={[
                  "Multi-camera broadcasting",
                  "Drone Photography/Videography",
                  "Remote Camera Work",
                  "...and much more!",
                ]}
              />
            </Box>
          </Grid>
        </WidthWrapper>
      </Box>

      <Box id="sign-up">
        <WidthWrapper>
          <Grid
            fill
            rows={rows}
            columns={columns}
            areas={areas}
            gap="medium"
            align="center"
          >
            <Box gridArea="left">
              <Heading level="3">Join our Beta!</Heading>
              <Text>
                ShootRemote is currently in beta, and we're adding new customers
                every day. If you're interested, sign up and we'll get back to
                you soon!
              </Text>
            </Box>
            <Box gridArea="right" pad="medium">
              <Box round="small" border pad="small">
                <Form
                  autoComplete="on"
                  value={value}
                  onChange={setValue}
                  data-netlify="true"
                  name="beta-signup"
                  onSubmit={(event: any) => {
                    const values = event.value;
                    fetch("/", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      body: encodeForm({
                        "form-name": "beta-signup",
                        ...values,
                      }),
                    })
                      .then(() => alert("Success!"))
                      .catch((error) => alert(error));
                    event.preventDefault();
                  }}
                >
                  <FormField name="name" required>
                    <TextInput placeholder="Name" name="name" />
                  </FormField>
                  <FormField name="name" required>
                    <TextInput type="email" placeholder="Email" name="email" />
                  </FormField>
                  <FormField name="camera">
                    <Select
                      placeholder="Camera Brand"
                      name="camera"
                      options={[
                        "Sony",
                        "Canon",
                        "RED",
                        "Fujifilm",
                        "Nikon",
                        "Other",
                      ]}
                    />
                  </FormField>

                  <Button label="Submit" type="submit" />
                </Form>
              </Box>
            </Box>
          </Grid>
        </WidthWrapper>
      </Box>

      <Box id="how-does-it-work" margin="medium">
        <WidthWrapper direction="column">
          <Heading level={2}>How does ShootRemote work?</Heading>
          <Grid
            columns={columns}
            rows={rows}
            areas={areas}
            fill="horizontal"
            gap="medium"
          >
            <Box gridArea="left">
              <Paragraph>
                ShootRemote works by connecting you to your camera through a
                couple of devices. It first connects to you through your device,
                wether it be a phone, tablet, or computer,
                <Text weight="bold">
                  &nbsp;ShootRemote is designed to work on any platform.
                </Text>
              </Paragraph>
              <Paragraph>
                ShootRemote connects to your camera through the&nbsp;
                <Text weight="bold">ShootRemote Adapter.</Text> Depending on the
                camera, the ShootRemote Adapter may connect to it with a wire,
                or wirelessly
              </Paragraph>
            </Box>
            <Box gridArea="right">
              <Paragraph>
                Your ShootRemote Adapter can connect to your device in several
                ways:
              </Paragraph>
              <ul>
                <li>
                  You can connect directly and wirelessly to the ShootRemote
                  Adapter from any device
                </li>
                <li>
                  You can connect to multiple ShootRemote Adapters by connecting
                  through a wireless network (similar to how your home WiFi
                  works)
                </li>
                <li>
                  You can connect to multiple ShootRemote Adapters over long
                  distances (about 1 mile) with the ShootRemote Station.
                </li>
              </ul>
            </Box>
            {/* <Box gridArea="right">
              <Stack guidingChild={1}>
                <Diagram
                  connections={[
                    {
                      fromTarget: "works-1",
                      toTarget: "works-2",
                      thickness: "xxsmall",
                      color: "accent-4",
                    },
                  ]}
                />
                <Box>
                  <Box
                    align="center"
                    fill="horizontal"
                    id="works-1"
                    margin="medium"
                  >
                    <Image src="/devices.svg" width="100px" />
                  </Box>
                  <Box
                    align="center"
                    fill="horizontal"
                    id="works-2"
                    margin="medium"
                  >
                    <Image src="/devices.svg" width="100px" />
                  </Box>
                  <Box
                    align="center"
                    fill="horizontal"
                    id="works-3"
                    margin="medium"
                  >
                    <Image src="/devices.svg" width="100px" />
                  </Box>
                </Box>
              </Stack>
            </Box>
           */}
          </Grid>
        </WidthWrapper>
      </Box>
    </Box>
  );
};

export default Home;
