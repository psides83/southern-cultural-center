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
import NewsSection from "pages/Media/News";
import EventsSection from "pages/Media/Events";
import VideoFilter from "../Video/components/VideoFilter";

function NationalConference() {
  const ref = useRef(null);
  const [playlists, setPlaylists] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const [activePlaylist, setActivePlaylist] = useState(null);

  const youtubeAPI = new YouTubeAPI(
    setPlaylists,
    activePlaylist,
    setActivePlaylist,
    setSelectedVideo,
    setVideos
  );

  const fetchVideos = useCallback(async () => {
    await youtubeAPI.fetch();
  }, [activePlaylist]);

  const fetchPlaylists = useCallback(async () => {
    const json = await siteData.playlists();

    console.log(json);
    setPlaylists(json);
    setActivePlaylist(json[0]);
  }, []);

  useEffect(() => {
    if (activePlaylist == null) {
      fetchPlaylists();
    }

    if (playlists != null) {
      fetchVideos();
    }
  }, [activePlaylist]);

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

  function selectVideo(e, video) {
    e.preventDefault();
    e.stopPropagation();

    setSelectedVideo(video);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <MKBox style={{ background: "white" }} shadow="lg">
      <MKTypography variant="h3" justifySelf="center" mt="20px">
        2024 National Conference
      </MKTypography>

      <MKBox ref={ref} mx="auto" my="0px" py="40px" maxWidth="1440px">
        <YouTubePlayer video={selectedVideo} />
      </MKBox>

      {/* <Stack direction="row" justifyContent="center" alignContent="center" alignItems="end">
        {activePlaylist != null && (
          <VideoFilter
            playlists={playlists}
            activePlaylist={activePlaylist}
            setActivePlaylist={setActivePlaylist}
            // selectedYear={selectedYear}
            // setSelectedyear={setSelectedyear}
            // setPageToken={setPageToken}
            // setPage={setPage}
          />
        )}
      </Stack> */}

      <VideoGrid
        videos={videos}
        selectedVideo={selectedVideo}
        selectVideo={selectVideo}
        // totalVideos={totalVideos}
        // page={page}
        // handleChangePage={handleChangePage}
        // perPage={perPage}
      />
    </MKBox>
  );
}

export default NationalConference;
