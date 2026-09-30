import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    setLoading(true);
    axios.get(url)
      .then(res => { if (active) setData(res.data); })
      .catch(() => { if (active) setError("Stories are temporarily unavailable."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [url]);
  return { data, loading, error };
}
