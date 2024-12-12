/* eslint-disable */
import { useCallback, useEffect, useState } from "react";
import siteData from "services/json-data-api";

async function fetchPodcastData(url) {
  try {
    const response = await fetch(url);
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "application/xml");
    const channel = xml.querySelector("channel");

    const podcastData = {
      title: channel.querySelector("title").textContent,
      description: channel.querySelector("description").textContent,
      image: channel.querySelector("image url").textContent,
      link: channel.querySelector("link").textContent,
    };

    return podcastData;
  } catch (error) {
    console.error("Error fetching podcast data:", error);
    return null;
  }
}

async function fetchPodcastEpisodes(url) {
  try {
    const response = await fetch(url);
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "application/xml");
    const items = xml.querySelectorAll("item");

    const episodes = Array.from(items).map((item) => {
      console.log(item);

      const titleElement = item.querySelector("title");
      const title = titleElement ? titleElement.textContent : "Unknown Title";
      const episodeMatch = title.match(/Episode #(\d+):/);
      const episodeNumber = episodeMatch ? parseInt(episodeMatch[1]) : null;

      const descriptionElement = item.querySelector("description");
      const description = descriptionElement ? descriptionElement.textContent : "No Description";

      const linkElement = item.querySelector("link");
      const link = linkElement ? linkElement.textContent : "#";

      const pubDateElement = item.querySelector("pubDate");
      const pubDate = pubDateElement ? pubDateElement.textContent : "Unknown Date";

      const enclosureElement = item.querySelector("enclosure");
      const enclosure = enclosureElement
        ? {
            url: enclosureElement.getAttribute("url"),
            type: enclosureElement.getAttribute("type"),
          }
        : null;

      let coverArt = null;
      const itunesImage = item.getElementsByTagNameNS(
        "http://www.itunes.com/dtds/podcast-1.0.dtd",
        "image"
      )[0];
      if (itunesImage) {
        coverArt = itunesImage.getAttribute("href");
      }

      return {
        title: title,
        description: description,
        link: link,
        pubDate: pubDate,
        enclosure: enclosure,
        episodeNumber: episodeNumber,
        coverArt: coverArt,
      };
    });

    console.log(episodes);
    return episodes;
  } catch (error) {
    console.error("Error fetching podcast episodes:", error);
    return [];
  }
}

export default function usePodcast(url) {
  const [podcastData, setPodcastData] = useState({});
  const [podcastEpisodes, setPodcastEpisodes] = useState([]);
  const [podcastServers, setPodcastServers] = useState([]);

  const fetchData = useCallback(async () => {
    const podcast = await fetchPodcastData(url);
    const episodes = await fetchPodcastEpisodes(url);
    const json = await siteData.podcastServers();

    setPodcastData(podcast);
    setPodcastEpisodes(episodes);
    setPodcastServers(json);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return [podcastData, podcastEpisodes, podcastServers];
}
