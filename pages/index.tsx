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
} from "grommet";
import { scroller } from "react-scroll";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WidthWrapper } from "../components/WidthWrapper";
import { encodeForm } from "../helpers/encodeForm";

const Home: FC = () => {
  const size = useContext(ResponsiveContext);

  const rows = size === "small" ? ["1/2", "1/2"] : ["auto"];
  const columns = size === "small" ? ["auto"] : ["1/2", "1/2"];
  const areas = size === "small" ? [["left"], ["right"]] : [["left", "right"]];
  const areasReverse =
    size === "small" ? [["right"], ["left"]] : [["left", "right"]];

  const [value, setValue] = useState({});
  return (
    <Box>
      <Header />
      <Box pad={{ horizontal: "large" }}>
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
                  ShootRemote is currently in beta, and we're adding new
                  customers every day. If you're interested, sign up and we'll
                  get back to you soon!
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
                      <TextInput
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
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
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
