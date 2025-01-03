/* eslint-disable */
import React, { useCallback, useEffect, useRef, useState } from "react";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import { Link, Stack } from "@mui/material";
import MKTypography from "components/MKTypography";
import useEvents from "hooks/events-hook";

function EventsSection() {
  const ref = useRef(null);
  const events = useEvents();
  //   const tabs = ["Videos", "News", "Events"];
  //   const [playlists, setPlaylists] = useState(null);
  //   const [selectedVideo, setSelectedVideo] = useState({});
  //   const [videos, setVideos] = useState([]);
  // const [nextPageToken, setNextPageToken] = useState();
  // const [prevPageToken, setPrevPageToken] = useState();
  // const [pageToken, setPageToken] = useState();
  // const [perPage, setPerPage] = useState(20);
  // const [totalVideos, setTotalVideos] = useState(0);
  // const [page, setPage] = useState(0);
  //   const tabOptions = [
  // VideoFilters.conferences,
  // VideoFilters.meetings,
  // VideoFilters.other,
  //   ];
  //   const [activeTab, setActiveTab] = useState(tabs[0]);
  //   const [activePlaylist, setActivePlaylist] = useState(null);

  //   const youtubeAPI = new YouTubeAPI(
  //     setPlaylists,
  //     activePlaylist,
  //     setActivePlaylist,
  //     setSelectedVideo,
  //     setVideos
  //   );

  //   const fetchVideos = useCallback(async () => {
  //     await youtubeAPI.fetch();
  //   }, [activePlaylist]);

  //   const fetchPlaylists = useCallback(async () => {
  //     const json = await siteData.playlists();

  //     console.log(json);
  //     setPlaylists(json);
  //     setActivePlaylist(json[0]);
  //   }, []);

  //   useEffect(() => {
  //     if (activePlaylist == null) {
  //       fetchPlaylists();
  //     }

  //     if (playlists != null) {
  //       fetchVideos();
  //     }
  //   }, [activePlaylist]);

  //   // const handleChangePage = (event, newPage) => {
  //   //   if (newPage > page) {
  //   //     setPageToken(nextPageToken);
  //   //     setPage(newPage);
  //   //   } else if (newPage < page) {
  //   //     setPageToken(prevPageToken);
  //   //     setPage(newPage);
  //   //   } else {
  //   //     return;
  //   //   }
  //   // };

  //   function selectVideo(e, video) {
  //     e.preventDefault();
  //     e.stopPropagation();

  //     setSelectedVideo(video);
  //     ref.current?.scrollIntoView({ behavior: "smooth" });
  //   }

  return (
    <Stack
      style={{ background: "white" }}
      justifySelf="center"
      mx="auto"
      //   shadow="lg"
      maxWidth="1080px"
      spacing="10px"
    >
      <MKTypography variant="h3" justifySelf="center" mt="20px">
        Events
      </MKTypography>
      {events.map((event) => (
        <Link key={event.url} href={event.url} target="blank">
          {event.title}
        </Link>
      ))}

      <MKTypography variant="caption">
        * Click on a listed event to open the flyer for the event.
      </MKTypography>
    </Stack>
  );
}

export default EventsSection;
