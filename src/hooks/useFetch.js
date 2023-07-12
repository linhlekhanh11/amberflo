import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, apiKey) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, { headers: {
        "API-KEY": apiKey
      }})
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.message);
        setData(null)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, apiKey]);


  return { data, setData, loading, error };
}


export default useFetch;



