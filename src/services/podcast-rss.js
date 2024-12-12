/* eslint-disable */
async function fetchPodcastEpisodes() {
  const rssUrl = "https://anchor.fm/s/f1be601c/podcast/rss";

  try {
    const response = await fetch(rssUrl);
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "application/xml");
    const items = xml.querySelectorAll("item");

    const episodes = Array.from(items).map((item) => {
      return {
        title: item.querySelector("title").textContent,
        description: item.querySelector("description").textContent,
        link: item.querySelector("link").textContent,
        pubDate: item.querySelector("pubDate").textContent,
        enclosure: item.querySelector("enclosure")
          ? {
              url: item.querySelector("enclosure").getAttribute("url"),
              type: item.querySelector("enclosure").getAttribute("type"),
            }
          : null,
        coverArt: item.querySelector("image").textContent,
      };
    });

    return episodes;
  } catch (error) {
    console.error("Error fetching podcast episodes:", error);
    return [];
  }
}

// Usage
// fetchPodcastEpisodes().then((episodes) => {
//   console.log(episodes);
//   // Render episodes on the webpage or perform other actions
// });

async function fetchPodcastData() {
  const rssUrl = "https://anchor.fm/s/f1be601c/podcast/rss";

  try {
    const response = await fetch(rssUrl);
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

// Usage
// fetchPodcastData().then((podcastData) => {
//   console.log(podcastData);
//   // Render podcast data on the webpage or perform other actions
// });

export { fetchPodcastEpisodes, fetchPodcastData };
