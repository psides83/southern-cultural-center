// class to fetch any json data that the site uses
class SiteData {
  baseURL = "https://psides83.github.io/listJSON/";

  // global json data links
  urls = {
    playlists: this.baseURL.concat("scc-playlists.json"),
    events: this.baseURL.concat("scc-events.json"),
    news: this.baseURL.concat("scc-news.json"),
  };

  // eslint-disable-next-line
  async fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }

  // eslint-disable-next-line
  playlists = async () => await this.fetchData(this.urls.playlists);

  // eslint-disable-next-line
  events = async () => await this.fetchData(this.urls.events);

  // eslint-disable-next-line
  news = async () => await this.fetchData(this.urls.news);
}

const siteData = new SiteData();

export default siteData;
