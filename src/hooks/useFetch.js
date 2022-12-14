import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState ('');
  const [loading, setLoading] = useState (false);

  useEffect (() => {
    setLoading (true);
    fetch (url)
      .then((res) => {
        if (res.status !== 200) {
          return Promise.reject(new Error(res.statusText))
        }
        return Promise.resolve(res)
      })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => setError(`${e}`))
      .finally(() => setLoading(false));
  }, [url])


  return {data, error, loading}
}