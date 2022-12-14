import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(url, opts)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((er) => {
        setError(er);
      })
      .finally(setLoading(false));
  }, []);

  return { data, error, loading };
}
