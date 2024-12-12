/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
// import { useState } from "react";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Authentication layout components
// import SimpleLayout from "pages/Authentication/components/SimpleLayout";
// import Separator from "pages/Authentication/components/Separator";
import SimpleLayout from "layouts/pages/Authentication/components/SimpleLayout";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext, AUTH_ACTION } from "state-management/auth-context-provider";
import { Alert, Snackbar } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "services/firebase";
// import Socials from "pages/Authentication/components/Socials";

function SignInSimple() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // console.log(user);
        // dispatch({
        //   type: AUTH_ACTION.LOGIN,
        //   currentUser: userCredential.user,
        // });
        navigate("/");
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        setValidationMessage("The email and/or password do not match");
        setOpenError(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  return (
    <SimpleLayout>
      <Card>
        <MKBox
          variant="gradient"
          bgColor="secondary"
          borderRadius="lg"
          coloredShadow="secondary"
          mx={2}
          mt={3}
          pt={2.5}
          pb={2.875}
          px={2.5}
          textAlign="center"
          lineHeight={1}
        >
          <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MKTypography>
          <MKTypography variant="button" color="white">
            Southern Cultural Center Media
          </MKTypography>
        </MKBox>
        <MKBox p={3}>
          <MKBox component="form" role="form">
            <MKBox mb={2}>
              <MKInput
                key="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MKBox>
            <MKBox mb={2}>
              <MKInput
                key="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </MKBox>

            <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                {validationMessage}
              </Alert>
            </Snackbar>

            {/* <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                {validationMessage}
              </Alert>
            </Snackbar> */}
            {/* <MKBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MKTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MKTypography>
            </MKBox> */}
            <MKBox mt={2} mb={1}>
              <MKButton variant="gradient" color="info" fullWidth onClick={signIn}>
                sign in
              </MKButton>
            </MKBox>
            {/* <Separator /> */}
            {/* <Socials /> */}
            <MKBox mt={3} textAlign="center">
              {/* <MKTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MKTypography
                  component={Link}
                  to="/authentication/sign-up/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MKTypography>
              </MKTypography> */}
            </MKBox>
          </MKBox>
        </MKBox>
      </Card>
    </SimpleLayout>
  );
}

export default SignInSimple;
