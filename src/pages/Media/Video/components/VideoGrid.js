/* eslint-disable */
import { Box, Grid, TablePagination } from "@mui/material";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import VideoButton from "pages/Media/Video/components/VideoButton";
import React from "react";

function VideoGrid({
  videos,
  selectedVideo,
  selectVideo,
  // totalVideos,
  // page,
  // handleChangePage,
  // perPage,
}) {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 3, md: 4, lg: 6 }}
          my={6}
          mx="auto"
        >
          {videos?.map((video) => (
            <Grid
              item
              xs={1}
              sm={1}
              md={1}
              lg={1}
              role="button"
              tabIndex="0"
              key={video?.contentDetails?.videoId}
              onClick={(e) => selectVideo(e, video)}
              onKeyDown={(e) => selectVideo(e, video)}
            >
              <VideoButton video={video} selectedVideo={selectedVideo} />
            </Grid>
          ))}
        </Grid>
        {/* <Box>
          <Box flexGrow={1} />
          <TablePagination
            component="div"
            count={totalVideos}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={perPage}
            labelRowsPerPage=""
            rowsPerPageOptions={[perPage]}
            sx={{ marginRight: "30px" }}
            // onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box> */}
      </Container>
    </MKBox>
  );
}

export default VideoGrid;
