import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";
import { Posts } from "src/components/Posts";

const Home = () => {
  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Posts />
    </div>
  );
};
export default Home;
