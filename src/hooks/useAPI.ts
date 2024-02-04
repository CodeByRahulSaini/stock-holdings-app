import { useState, useEffect } from "react";

const useAPI = <T>(url: string, defaultValue: any): [T, string] => {
  const [apiData, setAPIData] = useState(defaultValue);
  const [error, setErrorData] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setAPIData(res))
      .catch((e) => setErrorData(e?.message || "Please try again later"));
  }, []);

  return [apiData, error];
};

export default useAPI;
