import "./globals.scss";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { useColorScheme } from "@mantine/hooks";
import Head from "next/head";
import Header from "./components/Header/Header";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const preferredColorScheme = useColorScheme();

  const theme = createTheme({
    fontFamily: "Lato, sans-serif",
    primaryColor: "blue",
  });

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Alertngo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="./favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="./apple-touch-icon-57x57.png"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
