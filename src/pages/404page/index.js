/*
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useEffect, useRef } from "react";

// rellax
// import Rellax from "rellax";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Otis Kit PRO examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
// import Information from "pages/Blogs/SingleArticle/sections/Information";
// import Steps from "pages/Blogs/SingleArticle/sections/Steps";
// import OurEfforts from "pages/Blogs/SingleArticle/sections/OurEfforts";
// import Features from "pages/Blogs/SingleArticle/sections/Features";
// import Posts from "pages/Blogs/SingleArticle/sections/Posts";
// import Support from "pages/Blogs/SingleArticle/sections/Support";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/fbce-sanctuary-original.jpg";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/footers/DefaultFooter";

function ErrorPage() {
  // const headerRef = useRef(null);

  // Setting up rellax
  // useEffect(() => {
  //   const parallax = new Rellax(headerRef.current, {
  //     speed: -6,
  //   });

  //   return () => parallax.destroy();
  // }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        // transparent
        // relative
      />
      <MKBox
        // ref={headerRef}
        minHeight="85vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" flexDirection="column">
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              404 Page Not Found
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mb={2}
              mr={{ xs: 0, sm: 6 }}
              pr={{ xs: 0, sm: 6 }}
            >
              There was an error. The page you are looking for does not currently exist.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ErrorPage;
