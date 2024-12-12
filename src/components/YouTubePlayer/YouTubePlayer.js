import React from "react";
import PropTypes from "prop-types";
// import ReactPlayer from "react-player";
import "./youtube-player.css";
import { BASE_YT_EMBED_URL } from "data/urls";
// import MKTypography from "components/MKTypography";

function YouTubePlayer({ video }) {
  return (
    <div className="player-container">
      <iframe
        width="853"
        height="480"
        src={BASE_YT_EMBED_URL.concat(video.contentDetails?.videoId)}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video?.snippet?.title}
      />
    </div>
  );
}

YouTubePlayer.propTypes = {
  video: PropTypes.instanceOf(Object).isRequired,
};

export default YouTubePlayer;
