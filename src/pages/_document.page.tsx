import { getCssText } from "@/styles";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&family=Crimson+Pro:wght@600&family=Inter:wght@400;500;600;700&family=Lato:wght@300;400;700&family=Roboto:wght@400;500;700&family=Rubik:wght@400;500&family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />

        <meta name="description" content="Bora Codar" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
