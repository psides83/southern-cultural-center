/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
import { useContext, useEffect } from "react";

// react-router components
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// FBCE themes
import theme from "assets/theme";

// FBCE routes
// import routes from "routes";
// import Home from "pages/Home";
// import SingleArticle from "pages/Blog/sections/single-article";
// import VisitorCardGoogle from "pages/ContactUs/VisitorCardGoogle";
import ErrorPage from "pages/404page";
import VideosPage from "pages/Media/Video";
import SignInSimple from "pages/Authentication/SignIn/Simple";
import { AuthContext } from "state-management/auth-context-provider";
// import { auth } from "services/firebase";
import { getAuth } from "firebase/auth";

export default function App() {
  const { pathname } = useLocation();

  // eslint-disable-next-line
  const { currentUser } = useContext(AuthContext);
  // const [notification, setNotification] = useState({ title: "", body: "" });

  const RequireAuth = ({ children }) => {
    const auth = getAuth();
    // console.log(auth.currentUser);
    return auth.currentUser ? children : <Navigate to="/sign-in" />;
  };

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // const getRoutes = (allRoutes) =>
  //   allRoutes.map((route) => {
  //     if (route.collapse) {
  //       return getRoutes(route.collapse);
  //     }

  //     if (route.route) {
  //       return <Route exact path={route.route} element={route.component} key={route.key} />;
  //     }

  //     return null;
  //   });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* <Route path="/blog-posts/single-article/:postId" element={<SingleArticle />} /> */}
        {/* {getRoutes(routes)} */}
        <Route path="/">
          <Route path="sign-in" element={<SignInSimple />} />
          <Route
            index
            element={
              <RequireAuth>
                <VideosPage />
              </RequireAuth>
            }
          />
        </Route>
        {/* <Route path="/visitor-card" element={<VisitorCardGoogle />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  );
}
