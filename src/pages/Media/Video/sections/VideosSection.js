/* eslint-disable */
import React, { useCallback, useEffect, useRef, useState } from "react";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import "pages/Media/Video/styles/video-section.css";
import YouTubePlayer from "components/YouTubePlayer/YouTubePlayer";
import VideoGrid from "pages/Media/Video/components/VideoGrid";
import FilterTabs from "components/FilterTabs";
import YouTubeAPI from "services/youtube-api";
import MKTypography from "components/MKTypography";
import { Stack } from "@mui/material";
import siteData from "services/json-data-api";
import VideoFilter from "../components/VideoFilter";
import NewsSection from "pages/Media/News";
import EventsSection from "pages/Media/Events";
import VideoArchive from "pages/Media/VideoArchive";
import NationalConference from "pages/Media/NationalConference";
import MonthlyMeetings from "pages/Media/MonthlyMeetings";

function VideosSection() {
  const ref = useRef(null);
  const tabs = ["News", "Events", "Conference", "Meetings", "Media"];
  // const [playlists, setPlaylists] = useState(null);
  // const [selectedVideo, setSelectedVideo] = useState({});
  // const [videos, setVideos] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  // const [activePlaylist, setActivePlaylist] = useState(null);

  // const youtubeAPI = new YouTubeAPI(
  //   setPlaylists,
  //   activePlaylist,
  //   setActivePlaylist,
  //   setSelectedVideo,
  //   setVideos
  // );

  // const fetchVideos = useCallback(async () => {
  //   await youtubeAPI.fetch();
  // }, [activePlaylist]);

  // const fetchPlaylists = useCallback(async () => {
  //   const json = await siteData.playlists();

  //   console.log(json);
  //   setPlaylists(json);
  //   setActivePlaylist(json[0]);
  // }, []);

  // useEffect(() => {
  //   if (activePlaylist == null) {
  //     fetchPlaylists();
  //   }

  //   if (playlists != null) {
  //     fetchVideos();
  //   }
  // }, [activePlaylist]);

  // const handleChangePage = (event, newPage) => {
  //   if (newPage > page) {
  //     setPageToken(nextPageToken);
  //     setPage(newPage);
  //   } else if (newPage < page) {
  //     setPageToken(prevPageToken);
  //     setPage(newPage);
  //   } else {
  //     return;
  //   }
  // };

  // function selectVideo(e, video) {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   setSelectedVideo(video);
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // }

  return (
    <MKBox style={{ background: "white" }} shadow="lg">
      <MKTypography variant="h1" textAlign="center" p="20px 0 0 0">
        SCC Member Portal
      </MKTypography>

      <FilterTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab == "News" && <NewsSection />}

      {activeTab == "Events" && <EventsSection />}

      {activeTab == "Conference" && <NationalConference />}

      {activeTab == "Meetings" && <MonthlyMeetings />}

      {activeTab == "Media" && <VideoArchive />}
    </MKBox>
  );
}

export default VideosSection;
