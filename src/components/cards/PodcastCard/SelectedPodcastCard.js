/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// @mui material components
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Divider from "@mui/material/Divider";

// Otis Kit PRO components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
// import MKButton from "components/MKButton";
// import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

function SelectedPodcastCard({ episode }) {
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
                <Stack direction="row">
                  <MKTypography variant="h5" mb={1}>
                    {episode.title}
                  </MKTypography>
                  {/* <audio controls>
                    <source src={episode.enclosure?.url} type={episode.enclosure?.type} />
                    Your browser does not support the audio tag.
                  </audio> */}
                </Stack>
                <MKTypography variant="button" color="text">
                  <div
                    // eslint-disable-next-line
                    dangerouslySetInnerHTML={{ __html: episode.description }}
                    style={{ margin: "0 20px 20px 20px" }}
                  />
                </MKTypography>
              </MKBox>
              {/* <MKBox display={{ xs: "none", lg: "block" }} ml={1}>
                <MKButton color="dark">Follow</MKButton>
              </MKBox> */}
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SelectedPodcastCard;
