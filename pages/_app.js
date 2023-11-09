import "./globals.scss";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    fontFamily: "Lato, sans-serif",
    primaryColor: "blue",
  });

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Alertngo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
