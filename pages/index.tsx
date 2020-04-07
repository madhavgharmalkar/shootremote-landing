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
  DropButton,
  Nav,
  Anchor,
} from "grommet";
import { scroller } from "react-scroll";

import { encodeForm } from "../helpers/encodeForm";
import { logEvent } from "../helpers/googleAnalytics";

const Home: FC = () => {
  const size = useContext(ResponsiveContext);

  const rows = size === "small" ? ["auto", "auto"] : ["auto"];
  const columns = size === "small" ? ["auto"] : ["1/2", "1/2"];
  const areas = size === "small" ? [["left"], ["right"]] : [["left", "right"]];
  const areasReverse =
    size === "small" ? [["right"], ["left"]] : [["left", "right"]];

  const [value, setValue] = useState({});
  return (
    <Box>
      <Head>
        <title>ShootRemote | Save time. Create more.</title>
      </Head>
      <Box fill="horizontal">
        <Grid
          rows={rows}
          columns={columns}
          areas={areasReverse}
          gap="medium"
          fill="horizontal"
        >
          <Box gridArea="left">
            <Heading margin={{ vertical: "small" }}>
              Save time. Create more.
            </Heading>
            <Box justify="around">
              <Heading
                level="3"
                margin={{ vertical: "small" }}
                textAlign="center"
              >
                Select your industry
              </Heading>
              <Nav direction="row" wrap justify="center">
                <Anchor href="/livestreaming" margin={{ vertical: "small" }}>
                  <Button label="Live Streaming" />
                </Anchor>
                <Anchor href="/aerial" margin={{ vertical: "small" }}>
                  <Button label="Aerial Services" />
                </Anchor>
                <Anchor href="/filmmaking" margin={{ vertical: "small" }}>
                  <Button label="Filmmaking" />
                </Anchor>
              </Nav>
              {/* <Button
                label={<Text color="white">Join our Beta</Text>}
                primary
                onClick={() => {
                  logEvent("nav", "sign_up");
                  scroller.scrollTo("sign-up", {});
                }}
              />
              <Button
                label="Learn More"
                onClick={() => {
                  logEvent("nav", "what_is_shootremote");
                  scroller.scrollTo("what", {});
                }}
              /> */}
            </Box>
          </Box>
          <Box gridArea="right">
            <Image
              src="/videographer.svg"
              width="100%"
              alt="man with film camera"
            />
          </Box>
        </Grid>
      </Box>
      <Box id="what" margin="medium" direction="column">
        <Heading level="2">What is ShootRemote?</Heading>
        <Grid
          rows={rows}
          columns={columns}
          areas={areas}
          gap="large"
          align="center"
        >
          <Box gridArea="left">
            <Text>
              ShootRemote is a tool designed to let you create productively. It
              was created to allow creators to quickly check and change their
              DSLR, mirrorless, and film camera settings whithout having to be
              interuppted. ShootRemote is an excellent tool for:
            </Text>
            <Image src="/camera.svg" height="100px" />
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
      </Box>

      <Box id="sign-up" margin="medium">
        <Grid
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
              every day. If you're interested, sign up and we'll get back to you
              soon!
            </Text>
          </Box>
          <Box gridArea="right" pad="medium">
            <Box round="small" border pad="medium">
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
                {/* <FormField name="camera">
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
                  </FormField> */}

                <Button label="Submit" type="submit" />
              </Form>
            </Box>
          </Box>
        </Grid>
      </Box>

      <Box id="how-does-it-work" direction="column">
        <Heading level={2}>How does ShootRemote work?</Heading>
        <Grid
          columns={columns}
          rows={rows}
          areas={areas}
          fill="horizontal"
          gap="large"
        >
          <Box gridArea="left">
            <Paragraph fill>
              ShootRemote works by connecting you to your camera through a
              couple of devices. It first connects to you through your device,
              wether it be a phone, tablet, or computer,
              <Text weight="bold">
                &nbsp;ShootRemote is designed to work on any platform.
              </Text>
            </Paragraph>
            <Paragraph fill>
              ShootRemote connects to your camera through the&nbsp;
              <Text weight="bold">ShootRemote Adapter.</Text> Depending on the
              camera, the ShootRemote Adapter may connect to it with a wire, or
              wirelessly
            </Paragraph>
          </Box>
          <Box gridArea="right">
            <Paragraph fill>
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
                through a wireless network (similar to how your home WiFi works)
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
      </Box>
    </Box>
  );
};

export default Home;
