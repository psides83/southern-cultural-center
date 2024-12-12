/* eslint-disable */
// @mui material components
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import moment from "moment";

// Images
// import bgImage from "assets/images/fbce-sanctuary-original.jpg";
import { useState } from "react";
// import ReactPlayer from "react-player";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import { PhoneNumberMask } from "pages/utils/phone-number-mask";
import { sendContactFormEmail } from "../../services/email-service";

function VisitorCardGoogle() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          // action={{
          //   type: "external",
          //   route: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
          //   label: "buy now",
          //   color: "info",
          // }}
        />
      </MKBox>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          // ml={{ xs: "auto", lg: 6 }}
          // mr={{ xs: "auto", lg: 6 }}
          mt={12}
        >
          <iframe
            title="Contact Card"
            src="https://docs.google.com/forms/d/e/1FAIpQLScDD-SYbuLEk73yQAvMFFa2O24J6ivfALBo8Y_HP-oX0CJkMQ/viewform?embedded=true"
            width="100%"
            height="2800"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>

          <div className="tithely-container">
            {/* <iframe
          width="100%"
          height="800"
          src="https://tithe.ly/give_new/www/#/tithely/give"
          frameBorder="0"
          allowpaymentrequest="true"
          title="Give"
        /> */}
          </div>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default VisitorCardGoogle;
