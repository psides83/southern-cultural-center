// @mui material components
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// FBCE components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Routes
// import routes from "routes";
// import footerRoutes from "footer.routes";

// About Us page sections
// import DefaultNavbar from "components/Navbars/DefaultNavbar";
// import DefaultFooter from "components/footers/DefaultFooter";
import VideosSection from "pages/Media/Video/sections/VideosSection";

function VideosPage() {
  return (
    <>
      {/* <DefaultNavbar routes={routes} /> */}
      <MKBox width="100%">
        <Container>
          {/* <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          ></Grid> */}
        </Container>
      </MKBox>
      {/* <MKTypography variant="h1" textAlign="center" m="20px 0 0 0">
        Southern Cultural Center Media
      </MKTypography> */}
      <VideosSection />
      {/* <MKBox px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox> */}
    </>
  );
}

export default VideosPage;
