import { useCallback, useEffect, useState } from "react";
import siteData from "services/json-data-api";

export default function useTimes() {
  const [times, setTimes] = useState([]);

  const fetchData = useCallback(async () => {
    const json = await siteData.times();
    console.log(json);

    setTimes(json);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return times;
}
