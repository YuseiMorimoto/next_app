import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function Home() {
  const handleClick = (e) => {
    console.log(e.target);
    e.preventDefault();
  };

  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />

      <Footer />
    </div>
  );
}
