/** 
  All of the routes for the Otis Kit PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
// import CoworkingPage from "layouts/pages/landing-pages/coworking";
// import AboutUs from "layouts/pages/company/about-us";

// Account
import VideosPage from "pages/Media/Video/index";
import ContactUs from "pages/ContactUs";
import PodcastsPage from "pages/Media/Podcasts/index";

const routes = [
  {
    key: "oc",
    name: "our church",
    icon: <Icon>church</Icon>,
    columns: 2,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "about",
        collapse: [],
      },
      {
        name: "connect",
        collapse: [
          {
            key: "contact",
            name: "contact",
            route: "/connect/contact",
            component: <ContactUs />,
          },
        ],
      },
    ],
  },
  {
    key: "med",
    name: "media",
    icon: <Icon>ondemand_video</Icon>,
    columns: 1,
    rowsPerColumn: 1,
    collapse: [
      {
        name: "videos & audio",
        collapse: [
          {
            key: "ws",
            name: "Videos",
            route: "/media/videos",
            component: <VideosPage />,
          },
          {
            key: "pod",
            name: "podcasts",
            route: "/media/podcasts",
            component: <PodcastsPage />,
          },
        ],
      },
    ],
  },
  {
    key: "soc",
    socials: [
      {
        key: "fb",
        icon: <Icon>facebook</Icon>,
        link: "https://www.facebook.com/groups/FirstBaptistEclectic",
      },
      {
        key: "apod",
        icon: <Icon>podcasts</Icon>,
        link: "https://podcasts.apple.com/us/podcast/churchtalks/id1729284644",
      },
      {
        key: "ig",
        icon: <Icon>instagram</Icon>,
        link: "https://www.instagram.com/fbcglorybound/",
      },
      {
        key: "yt",
        icon: <Icon>youtube</Icon>,
        link: "https://www.youtube.com/channel/UCqOE4fLVedJ2vu_M9Yn_y3w",
      },
    ],
  },
];

export default routes;
