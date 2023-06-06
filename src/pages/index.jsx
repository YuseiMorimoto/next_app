import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  // reactのコンポーネントは状態が変化しないと再レンダリングされない
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    // マウント時
    console.log("foo");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("bar");
      // アンマウント時
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />

      <Footer />
    </div>
  );
}
