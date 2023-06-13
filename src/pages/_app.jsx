import "src/styles/globals.css";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgColor } from "src/hooks/useBgColor";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const InputArray = useInputArray();
  useBgColor();
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Component {...pageProps} {...counter} {...InputArray} />;
    </>
  );
}

export default MyApp;
