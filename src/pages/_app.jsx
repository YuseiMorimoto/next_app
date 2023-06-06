import "src/styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
