// class to fetch any json data that the site uses
class SiteData {
  baseURL = "https://psides83.github.io/listJSON/";

  // global json data links
  urls = {
    podcastServers: this.baseURL.concat("podcast-servers.json"),
    playlists: this.baseURL.concat("scc-playlists.json"),
  };

  // eslint-disable-next-line
  async fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }

  // eslint-disable-next-line
  staff = async () => await this.fetchData(this.urls.staff);

  // eslint-disable-next-line
  whoWeAre = async () => await this.fetchData(this.urls.whoWeAre);

  // eslint-disable-next-line
  baptistFaith = async () => await this.fetchData(this.urls.baptistFaith);

  // eslint-disable-next-line
  gospel = async () => await this.fetchData(this.urls.gospel);

  // eslint-disable-next-line
  membership = async () => await this.fetchData(this.urls.membership);

  // eslint-disable-next-line
  worshipSection = async () => await this.fetchData(this.urls.worshipSection);

  // eslint-disable-next-line
  serviceStreams = async () => await this.fetchData(this.urls.serviceStreams);

  // eslint-disable-next-line
  blogPosts = async () => await this.fetchData(this.urls.blogPosts);

  // eslint-disable-next-line
  bibleStudies = async () => await this.fetchData(this.urls.bibleStudies);

  // eslint-disable-next-line
  podcastServers = async () => await this.fetchData(this.urls.podcastServers);

  // eslint-disable-next-line
  times = async () => await this.fetchData(this.urls.times);

  // eslint-disable-next-line
  playlists = async () => await this.fetchData(this.urls.playlists);
}

const siteData = new SiteData();

export default siteData;
