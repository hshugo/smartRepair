import { useEffect, useState } from 'react';

const { REACT_APP_API_ENDPOINT } = process.env;

const useFetch = (url: string) => {
  const [dataFetch, setDataFetch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (url) {
      fetch(`${REACT_APP_API_ENDPOINT}/${url}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setDataFetch(data);
          setLoading(false);
        });
    } else {
      setDataFetch(null);
      setLoading(true);
    }
  }, [url]);

  return { dataFetch, loading };
};

export default useFetch;
