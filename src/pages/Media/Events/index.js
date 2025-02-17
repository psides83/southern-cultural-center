/* eslint-disable */
import React, { useCallback, useEffect, useRef, useState } from "react";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import { Link, Stack } from "@mui/material";
import MKTypography from "components/MKTypography";
import useEvents from "hooks/events-hook";
import YouTubeSingleVideoPlayer from "components/YouTubePlayer/YouTubeSingleVideoPlayer";

function EventsSection() {
  const ref = useRef(null);
  const events = useEvents();

  return (
    <Stack
      style={{ background: "white" }}
      justifySelf="center"
      mx="20px"
      //   shadow="lg"
      maxWidth="1080px"
      spacing="10px"
    >
      <MKTypography variant="h3" justifySelf="center" mx="auto" pl={8} pt={8}>
        Events
      </MKTypography>
      {/* <MKBox justifyItems="start"> */}
      {events.map((event) => (
        <MKBox pb={8} pl={8}>
          <MKTypography key={event.url} variant="body">
            <Link href={event.url} target="blank" justifySelf="start">
              {event.title}
            </Link>
          </MKTypography>
          {event.video && <YouTubeSingleVideoPlayer video={event.video} />}
        </MKBox>
      ))}
      {/* </MKBox> */}

      <MKTypography variant="caption">
        * Click on a listed event to open the flyer for the event.
      </MKTypography>
    </Stack>
  );
}

export default EventsSection;
