// @mui material components
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// import moment from "moment";

// Images
import bgImage from "assets/images/fbce-sanctuary-original.jpg";
import { useState } from "react";
// import ReactPlayer from "react-player";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// import { sendContactFormEmail } from "../../services/email-service";

function ContactUs() {
  const [contactData, setContactData] = useState({
    id: "",
    timestamp: "",
    name: "",
    email: "",
    message: "",
  });

  // handle the onChange for the lead inputs
  const handleInput = (e, id) => {
    // eslint-disable-next-line no-var
    var { value } = e.target;

    if (id === "name") {
      const names = e.target.value;

      value = names.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    }

    setContactData({ ...contactData, [id]: value });
  };

  const sendForm = async (e) => {
    e.preventDefault();

    // const timestamp = moment().format("DD-MMM-yyyy hh:mmA");
    // const id = moment().format("yyyyMMDDHHmmss");

    // await sendContactFormEmail({ ...contactData, id, timestamp });
  };

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
      <Grid container>
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 75%",
              display: "grid",
              placeItems: "center",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="primary"
              coloredShadow="primary"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              {/* <MKTypography variant="body2" color="text" mb={3}>
                For further questions, including partnership opportunities, please email
                hello@creative-tim.com or contact using our contact form.
              </MKTypography> */}
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      id="name"
                      variant="standard"
                      label="Full Name"
                      value={contactData.name}
                      onChange={(e) => handleInput(e, "name")}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      id="email"
                      type="email"
                      variant="standard"
                      label="Email"
                      value={contactData.email}
                      onChange={(e) => handleInput(e, "email")}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      id="message"
                      variant="standard"
                      label="How can we help you?"
                      placeholder="Please provide contact info so that we can contact you about your message."
                      value={contactData.message}
                      onChange={(e) => handleInput(e, "message")}
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="primary" onClick={sendForm}>
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
