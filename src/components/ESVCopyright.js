// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import esvLogo from "assets/images/logos/esv-logo.png";
import { Stack } from "@mui/material";
import { ESV_URL } from "data/urls";

function ESVCopyright() {
  return (
    <MKBox component="section">
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} my="auto">
          <Stack direction="row">
            <a href={ESV_URL} target="_blank" rel="noreferrer" variant="button">
              <MKBox component="img" alt="esv" src={esvLogo} height="30px" px="20px" />
            </a>
            <Stack>
              <MKTypography component="p" variant="caption">
                Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard
                Version®), copyright © 2001 by Crossway, a publishing ministry of Good News
                Publishers. Used by permission. All rights reserved. The ESV text may not be quoted
                in any publication made available to the public by a Creative Commons license. The
                ESV may not be translated into any other language.
                <br />
                <br />
              </MKTypography>

              <MKTypography component="p" variant="caption">
                Users may not copy or download more than 500 verses of the ESV Bible or more than
                one half of any book of the ESV Bible.
              </MKTypography>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ESVCopyright;
