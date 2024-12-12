import React from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import truncateString from "pages/utils/utils";
import { Tooltip } from "@mui/material";

function VideoButton({ video, selectedVideo }) {
  return (
    <MKBox
      width="100%"
      style={{
        margin:
          selectedVideo.contentDetails?.videoId === video.contentDetails?.videoId ? "-3px" : null,
        padding: "6px",
        border:
          selectedVideo.contentDetails?.videoId === video.contentDetails?.videoId
            ? "3px solid #0b0b50"
            : null,
        borderRadius: "6px",
      }}
    >
      <img
        className="video-thumb"
        src={video.snippet?.thumbnails?.standard?.url}
        alt={video.snippet?.title}
        style={{
          aspectRatio: "16 / 9",
          objectFit: "cover",
          filter:
            selectedVideo.contentDetails?.videoId === video.contentDetails?.videoId
              ? "brightness(25%)"
              : null,
        }}
      />
      <Tooltip title={video.snippet?.title}>
        <h5 style={{ marginLeft: "6px", marginTop: "4px" }}>
          {truncateString(video.snippet?.title, 60)}
        </h5>
      </Tooltip>
    </MKBox>
  );
}

VideoButton.propTypes = {
  video: PropTypes.instanceOf(Object).isRequired,
  selectedVideo: PropTypes.instanceOf(Object).isRequired,
};

export default VideoButton;
