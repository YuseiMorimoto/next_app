import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect } from "react";

export default function Home() {
  // const handleClick = (e) => {
  //   console.log(e.target);
  //   e.preventDefault();
  // };

  useEffect(() => {
    // マウント時
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      // アンマウント時
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <button onClick={handleClick}>ボタン</button> */}

      <Main page="index" />

      <Footer />
    </div>
  );
}
