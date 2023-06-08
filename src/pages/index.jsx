import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  // reactのコンポーネントは状態が変化しないと再レンダリングされない
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  useEffect(() => {
    // マウント時
    document.body.style.backgroundColor = "lightblue";

    return () => {
      // アンマウント時
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  // string
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      // const newArray = prevArray;
      // newArray.push(1);
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在します。");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      console.log(newArray === prevArray);
      return newArray;
    });
  }, [text]);

  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />

      <Footer />
    </div>
  );
}

// setIsShow((isShow) => {
//   if (isShow === true) {
//     return false;
//   } else {
//     return true;
//   }
// });
// }}

// return isShow ? false : true;
