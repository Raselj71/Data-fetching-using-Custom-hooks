import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(`Data can't fetching`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [url, setData]);

  return [data, loading, error, setData];
}

export default useFetch;
