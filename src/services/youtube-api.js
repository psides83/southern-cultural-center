/* eslint-disable */
import { callComponants } from "./youtube-api-call-components";

class YouTubeAPI {
  constructor(setPlaylists, activeTab, setActiveTab, setSelectedVideo, setVideos) {
    this.setPlaylists = setPlaylists;
    this.activeTab = activeTab;
    this.setActiveTab = setActiveTab;
    this.setSelectedVideo = setSelectedVideo;
    this.setVideos = setVideos;
  }

  async fetch() {
    const url = await this.setURL();
    console.log(url);
    const headers = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await fetch(url, headers);

    if (response.status === 200) {
      const data = await response.json();
      await this.setData(data);
    }
  }

  async fetchPlaylists() {
    const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCF9Q6wy5wb2pzprTuoyhm8A&maxResults=25&key=${callComponants.key}`;
    const headers = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await fetch(url, headers);

    if (response.status === 200) {
      const data = await response.json();
      // console.log(data);
      await this.setPlaylistsData(data);
    }
  }

  deletesFiltered(video) {
    return video.snippet.title !== "Deleted video";
  }

  privatesFiltered(video) {
    return video.snippet.title !== "Private video";
  }

  async setData(data) {
    const videosFiltered = data.items?.filter(this.deletesFiltered).filter(this.privatesFiltered);

    // this.setNextPageToken(data.nextPageToken);
    // this.setPrevPageToken(data.prevPageToken);
    // this.setPerPage(data.pageInfo.resultsPerPage);
    // this.setTotalVideos(data.pageInfo.totalResults);
    this.setVideos(videosFiltered);
    this.setSelectedVideo(videosFiltered[0]);
  }

  async setPlaylistsData(data) {
    const playlists = data.items?.map((item) => {
      return {
        id: item.id,
        title: item.snippet.title,
      };
    });

    console.log(playlists);

    this.setActiveTab(playlists[0]);
    this.setPlaylists(playlists);
  }

  async setURL() {
    const apiKey = callComponants.key;
    const baseURL = callComponants.baseURL;
    const parts = callComponants.parts;
    const maxResults = callComponants.maxResults;
    // const playlistID = callComponants.playlistID;
    const fields = callComponants.fields.videoList;

    const urlPrefix = `${baseURL}?part=${parts}&maxResults=${maxResults}`;
    const urlSuffix = `&fields=${fields}&key=${apiKey}`;

    return `${urlPrefix}&playlistId=${this.activeTab.id}${urlSuffix}`;

    // if (this.activeTab === this.videoFilters.conferences) {
    //   if (this.pageToken === undefined || this.pageToken === null) {
    //     return `${urlPrefix}&playlistId=${playlistID.conferences}${urlSuffix}`;
    //   }
    //   return `${urlPrefix}&pageToken=${this.pageToken}&playlistId=${playlistID.conferences}${urlSuffix}`;
    // }

    // if (this.activeTab === this.videoFilters.meetings) {
    //   if (this.pageToken === undefined || this.pageToken === null) {
    //     return `${urlPrefix}&playlistId=${playlistID.meetings}${urlSuffix}`;
    //   }
    //   return `${urlPrefix}&pageToken=${this.pageToken}&playlistId=${playlistID.meetings}${urlSuffix}`;
    // }

    // if (this.activeTab === this.videoFilters.other) {
    //   if (this.pageToken === undefined || this.pageToken === null) {
    //     return `${urlPrefix}&playlistId=${playlistID.other}${urlSuffix}`;
    //   }
    //   return `${urlPrefix}&pageToken=${this.pageToken}&playlistId=${playlistID.other}${urlSuffix}`;
    // }
  }

  // videoFilters = {
  //   conferences: "Conference",
  //   meetings: "Meetings",
  //   // other: "Other Videos",
  // };
}

export default YouTubeAPI;
