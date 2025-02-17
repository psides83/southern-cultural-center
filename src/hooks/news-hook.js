// import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import siteData from "services/json-data-api";

export default function useNews() {
  const [news, setNews] = useState([]);

  const fetchData = useCallback(async () => {
    // const currentDate = moment().format("yyyyMMDD");
    // console.log(currentDate);
    const json = await siteData.news();
    // const filtered = await json
    //   .filter((post) => post.id <= currentDate)
    //   .sort((a, b) => b.id - a.id);

    setNews(json);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return news;
}
