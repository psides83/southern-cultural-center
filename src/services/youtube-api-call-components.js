/* eslint-disable */
export const callComponants = {
  key: process.env.REACT_APP_YOUTUBE_API_KEY,
  baseURL: "https://youtube.googleapis.com/youtube/v3/playlistItems",
  parts: "snippet%2CcontentDetails",
  maxResults: "50",
  channelID: "UCF9Q6wy5wb2pzprTuoyhm8A",
  playlistID: {
    conferences: "PLxVsCHk_RfLxvmOvJRvMyk_hKFeQl2JqR",
    meetings: "PLxVsCHk_RfLyQUF04EI31cjtfjh0vC0Se",
    // worshipServices: "PLkSQb7eVv34pW71TtjNcscLEd_IooEMAZ",
    // studentWorship: "PLkSQb7eVv34owZQ-lFVS4TurTwRhkibOD",
    // other: "PLkSQb7eVv34rAfekODd3PJRUT-MiJXC0U",
    // allUplaods: "UUqOE4fLVedJ2vu_M9Yn_y3w",
  },
  fields: {
    videoList:
      "etag%2CnextPageToken%2CprevPageToken%2Citems(snippet(title%2Cdescription%2Cthumbnails(standard(url))%2Cposition)%2CcontentDetails)%2CpageInfo",
    livePlaylist: "etag%2Citems(snippet(resourceId(videoId)))",
    liveVideo: "etag%2Citems(etag%2Cid%2Csnippet(title%2CliveBroadcastContent))",
  },
};
