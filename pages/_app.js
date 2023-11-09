import "./globals.scss";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { useColorScheme } from "@mantine/hooks";
import Head from "next/head";
import Header from "./Header";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);

  const theme = createTheme({
    fontFamily: "Lato, sans-serif",
    primaryColor: "blue",
  });

  return (
    <MantineProvider defaultColorScheme="light" theme={theme}>
      <Head>
        <title>Alertngo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
