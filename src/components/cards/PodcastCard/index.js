/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// @mui material components
import { PlayArrowRounded } from "@mui/icons-material";
import { Collapse, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Divider from "@mui/material/Divider";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
// import MKBadge from "components/MKBadge";
// import MKButton from "components/MKButton";
// import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import moment from "moment";
// import MKSocialButton from "components/MKSocialButton";

function PodcastCard({ episode, selectedEpisode, selectEpisode }) {
  return (
    <MKBox component="section">
      <Container>
        <Grid container>
          <Grid item xs={12} lg={8} mx="auto">
            <Grid container justifyContent="space-betweeb" alignItems="center">
              {/* <Grid xs={12} md={6}>
                <MKBox ml={-1}>
                  <MKBadge badgeContent="Photography" variant="contained" color="info" />
                  <MKBadge badgeContent="Stories" variant="contained" color="info" />
                  <MKBadge badgeContent="Castle" variant="contained" color="info" />
                </MKBox>
              </Grid> */}
              {/* <Grid xs={12} md={6}>
                <Stack direction="row" spacing={1} justifyContent="flex-end">
                  <MKSocialButton color="facebook" size="sm">
                    <MKBox className="fab fa-facebook" color="inherit" mr={1} /> 872
                  </MKSocialButton>
                  <MKSocialButton color="twitter" size="sm">
                    <MKBox className="fab fa-twitter" color="inherit" mr={1} /> 910
                  </MKSocialButton>
                  <MKSocialButton color="pinterest" size="sm">
                    <MKBox className="fab fa-pinterest" color="inherit" mr={1} /> 232
                  </MKSocialButton>
                </Stack>
              </Grid> */}
            </Grid>
            {/* <Divider sx={{ mt: 1 }} /> */}
            <MKBox display="flex" alignItems="center">
              {/* <MKAvatar
                src={episode.image}
                alt="Alec Thompson"
                size="xxl"
                variant="rounded"
                shadow="xl"
              /> */}
              <MKBox ml={3}>
                <Stack direction="row" spacing={2}>
                  <img
                    alt={episode.title}
                    src={episode.coverArt}
                    style={{
                      width: "160px",
                      alignSelf: "center",
                      borderRadius: "12px",
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    }}
                  />
                  <Stack direction="column" justifyContent="center">
                    <MKTypography
                      variant="h5"
                      mb={1}
                      color={selectedEpisode?.link === episode?.link ? "primary" : null}
                    >
                      {episode.title}
                    </MKTypography>
                    <Stack direction="row">
                      <Collapse
                        orientation="horizontal"
                        in={selectedEpisode?.link === episode?.link}
                      >
                        <audio controls>
                          <source src={episode.enclosure?.url} type={episode.enclosure?.type} />
                          Your browser does not support the audio tag.
                        </audio>
                      </Collapse>
                      <Collapse
                        orientation="horizontal"
                        in={selectedEpisode?.link !== episode?.link}
                      >
                        <MKButton
                          variant="contained"
                          size="small"
                          color="primary"
                          onClick={(e) => selectEpisode(e, episode)}
                          endIcon={<PlayArrowRounded />}
                        >
                          Play Episode
                        </MKButton>
                      </Collapse>
                    </Stack>
                  </Stack>
                </Stack>
                <MKTypography variant="button" mb={1}>
                  {moment(episode.pubDate).format("LL")}
                </MKTypography>
                <MKTypography variant="button" color="text">
                  <div
                    // eslint-disable-next-line
                    dangerouslySetInnerHTML={{ __html: episode.description }}
                    style={{ margin: "0 20px 20px 20px" }}
                  />
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
        {/* <Divider /> */}
      </Container>
    </MKBox>
  );
}

export default PodcastCard;
