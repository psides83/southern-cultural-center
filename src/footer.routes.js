// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// FBCE components
import MKTypography from "components/MKTypography";

// Images
import fbceLogo from "assets/images/fbce-star-logo.png";
import { FB_URL, IG_URL, YT_URL, POD_URL } from "data/urls";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "First Baptist Church Eclectic",
    poBox: "PO Box 240400",
    street: "203 Claud Road",
    cityStateZip: "Eclectic, AL 36024",
    phone: "(334) 541-4444",
    image: fbceLogo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: FB_URL,
    },
    {
      icon: <PodcastsIcon />,
      link: POD_URL,
    },
    {
      icon: <InstagramIcon />,
      link: IG_URL,
    },
    {
      icon: <YouTubeIcon />,
      link: YT_URL,
    },
  ],
  menus: [
    {
      name: "about us",
      items: [
        {
          name: "who we are",
          route: "/about/who-we-are",
        },
        {
          name: "what we teach",
          route: "/about/what-we-teach",
        },
        {
          name: "pastors & staff",
          route: "/about/staff",
        },
      ],
    },
    {
      name: "connect",
      items: [
        {
          name: "contact",
          route: "/connect/contact",
        },
        {
          name: "ministries",
          route: "/connect/ministries",
        },
        {
          name: "membership",
          route: "/connect/membership",
        },
        {
          name: "give",
          route: "/give",
        },
      ],
    },
    {
      name: "media",
      items: [
        {
          name: "worship services",
          route: "/media/videos",
        },
        {
          name: "sermons",
          route: "/media/sermons",
        },
        {
          name: "podcasts",
          route: "/media/podcasts",
        },
        {
          name: "blog",
          route: "/blog-posts",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography variant="button" fontWeight="regular">
        First Baptist Church Eclectic
      </MKTypography>
      .
    </MKTypography>
  ),
};
