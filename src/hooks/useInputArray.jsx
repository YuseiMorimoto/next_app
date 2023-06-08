import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

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

  return { text, array, handleChange, handleAdd };
};
