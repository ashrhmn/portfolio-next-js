import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Ashik Rahman - Developer" />
        <meta
          property="og:image"
          content="https://v2.ashrhmn.com/images/user1.jpeg"
        />
        <meta name="description" content="Fullstack and Blockchain Developer" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
