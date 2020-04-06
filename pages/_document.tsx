import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Control your camera remotely with SmartRemote"
          />
          <meta
            name="keywords"
            content="dslr,camera,remote,api,mirrorless,api"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />

          <meta property="og:url" content="https://shootremote.com" />
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content="https://shootremote.com/default.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
