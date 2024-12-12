/* eslint-disable */
import { callComponants } from "services/youtube-api-call-components";

class LiveStreamAPI {
  constructor(setIsLive, setVideo) {
    this.setIsLive = setIsLive;
    this.setVideo = setVideo;
  }

  key = callComponants.key;

  async fetch() {
    const playlistId = callComponants.playlistID.allUplaods;
    const playlistFields = callComponants.fields.livePlaylist;
    const playlistEtag = localStorage.getItem("playlistEtag");

    const playlistUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&fields=${playlistFields}&key=${this.key}`;

    const playlistHeaders = {
      headers: {
        Accept: "application/json",
        "If-None-Match": playlistEtag,
      },
    };

    const response = await fetch(playlistUrl, playlistHeaders);

    console.log(response)

    if (response.status === 200) {
      await this.onPlaylistResponse200(response)
    }

    if (response.status === 304) {
      await this.onPlaylistResponse304()
    }
  }

  // run function when the playlist call response is 200
  async onPlaylistResponse200(response) {
    console.log(`Response: ${response}`)
    const data = await response.json();
    localStorage.setItem("playlistEtag", data.etag);

    const videoId = data.items[0].snippet.resourceId.videoId;
    localStorage.setItem("videoId", videoId);

    await this.fetchVideoData(videoId);
  }

  // run function when the playlist call response is 304
  async onPlaylistResponse304() {
    const videoId = localStorage.getItem("videoId");

    await this.fetchVideoData(videoId);
  }

  // run to fetch video data
  async fetchVideoData(videoId) {
    const fields = callComponants.fields.liveVideo;
    const videoEtag = localStorage.getItem("videoEtag");

    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&fields=${fields}&key=${this.key}`;

    const videoHeaders = {
      headers: {
        Accept: "application/json",
        "If-None-Match": videoEtag,
      },
    };

    const response = await fetch(videoUrl, videoHeaders);

    console.log(response)

    if (response.status === 200) {
      await this.onVideoResponse200(response)
    }

    if (response.status === 304) {
      await this.onVideoResponse304()
    }
  }

  // run function when the video call response is 200
  async onVideoResponse200(response) {
    const data = await response.json();

    if (data.items[0]?.snippet.liveBroadcastContent === "live") {
      localStorage.setItem("videoEtag", data.etag);
      localStorage.setItem("video", JSON.stringify(data.items[0]));

      this.setIsLive(true);
      this.setVideo(data.items[0]);
    }

    if (data.items[0]?.snippet.liveBroadcastContent !== "live") {
      localStorage.setItem("videoEtag", data.etag);
      localStorage.setItem("video", null);

      this.setIsLive(false);
      this.setVideo(undefined);
    }
  }

  // run function when the video response call is 304
  async onVideoResponse304() {
    const video = await JSON.parse(localStorage.getItem("video"));

    if (video?.snippet.liveBroadcastContent === "live") {
      this.setIsLive(true);
      this.setVideo(video);
    }

    if (video?.snippet.liveBroadcastContent !== "live") {
      this.setIsLive(false);
      this.setVideo(undefined);
      localStorage.setItem("video", null);
    }
  }
}

export default LiveStreamAPI;
