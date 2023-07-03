import { useCallback, useEffect, useReducer } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end": {
      console.log(action);
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }

    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      throw Error("no such action type!");
  }
  newState;
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/postsaa");
      if (!res.ok) {
        throw new Error("エラーが発生したためデータの取得に失敗しました。");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>ローディング中</div>;
  }
  if (state.error) {
    return <div>{state.error.message}</div>;
  }
  if (state.data.length === 0) {
    return <div>データは空です。</div>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </ol>
  );
};
