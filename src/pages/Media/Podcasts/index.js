/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// rellax
import Rellax from "rellax";

// FBCE components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// About Us page sections
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/footers/DefaultFooter";
import { Helmet } from "react-helmet";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchPodcastEpisodes, fetchPodcastData } from "services/podcast-rss";
import { Button, Card, Divider, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";

import BlogArticleCard from "pages/Blog/sections/BlogArticleCard";
// import HorizontalTeamCard from "components/cards/HorizontalTeamCard";
import PodcastCard from "components/cards/PodcastCard";

import MKSocialButton from "components/MKSocialButton";
import { YouTube } from "@mui/icons-material";
// eslint-disable-next-line import/no-named-as-default
// import siteData from "services/json-data-api";
import usePodcast from "hooks/podcast-hook";
import { PODCAST_RSS_URL } from "data/urls";
import SearchInput from "./components/PodcastSearchInput";

function PodcastsPage() {
  const headerRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [searchParam] = useState(["title", "description"]);
  const [sortOrder, setSortOrder] = useState("newest");
  const [podcastData, podcastEpisodes, podcastServers] = usePodcast(PODCAST_RSS_URL);
  const [selectedEpisode, setSelectedEpisode] = useState({});

  function searchable() {
    return podcastEpisodes
      .sort((a, b) => {
        if (sortOrder === "newest") return new Date(b.pubDate) - new Date(a.pubDate);
        return new Date(a.pubDate) - new Date(b.pubDate);
      })
      .filter((item) =>
        searchParam.some(
          (newItem) =>
            item[newItem]
              .toString()
              .toLowerCase()
              .replace(/[^0-9, a-z]/g, "")
              .replace(/\s/g, "")
              .indexOf(searchText.toLowerCase().replace(/\s/g, "")) > -1
        )
      );
  }

  function selectEpisode(e, episode) {
    e.preventDefault();
    e.stopPropagation();

    setSelectedEpisode(episode);
    // headerRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSort(e, newSortOrder) {
    setSortOrder(newSortOrder);
  }

  return (
    <>
      <Helmet>
        <title>{podcastData.title}</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={podcastData.title} />
        <meta property="og:description" content={podcastData.description} />
        <meta property="og:image" content={podcastData.image} />
        <meta name="description" content={podcastData.description} />
        <meta name="keywords" content="church, god, christian, christ, christianity, salvation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={podcastData.title} />
        <meta name="twitter:image" content={podcastData.image} />
      </Helmet>
      <DefaultNavbar routes={routes} />
      <Card>
        <MKBox width="100%">
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={8}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              sx={{ mx: "auto", textAlign: "center" }}
            >
              <Stack direction="row" alignItems="center" alignContent="center">
                <img
                  alt={podcastData.title}
                  src="https://psides83.github.io/fbce-website-resources/images/the-iinquiry-room-logo-transparent-podcast.png"
                  style={{ width: "320px", alignSelf: "center" }}
                />
                {/* <MKTypography variant="h1" textAlign="center" mx="120px 0 0 0" mt={4}>
                  Podcast
                </MKTypography> */}
              </Stack>
              <MKTypography variant="body" textAlign="center" mx="120px 0 0 0" my={4}>
                {podcastData.description}
              </MKTypography>
            </Grid>
            <Divider />
            <Grid
              container
              item
              xs={12}
              lg={8}
              justifyContent="space-around"
              flexWrap="wrap"
              alignItems="flex-end"
              alignContent="flex-end"
              // flexDirection="row"
              sx={{ mx: "auto", maxWidth: "800px" }}
            >
              <Grid item>
                <ToggleButtonGroup value={sortOrder} size="small" exclusive onChange={handleSort}>
                  <ToggleButton value="newest" size="small">
                    Newest-Oldest
                  </ToggleButton>
                  <ToggleButton value="oldest" size="small">
                    Oldest-Newest
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item>
                <SearchInput searchTerm={searchText} setSearchTerm={setSearchText} />
              </Grid>
            </Grid>
            {/* <Divider /> */}
          </Container>
        </MKBox>
        <Grid container spacing={3} my={2} mb={8}>
          {searchable()?.map((episode) => (
            <Grid
              item
              key={episode.link}
              xs={12}
              lg={12}
              onClick={(e) => selectEpisode(e, episode)}
              onKeyDown={(e) => selectEpisode(e, episode)}
            >
              <PodcastCard
                episode={episode}
                selectedEpisode={selectedEpisode}
                selectEpisode={selectEpisode}
              />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <Stack direction="row">
            <div className="sc-fUuaMo cRInMI">
              <MKBox mb={2}>
                <a href="https://www.podbean.com" rel="noopener noreferrer" target="_blank">
                  <img
                    alt="PodBean"
                    style={{ height: "56px" }}
                    src="//d8g345wuhgd7e.cloudfront.net/site/images/badges/w600.png"
                  />
                </a>
              </MKBox>

              <h5 data-encore-id="type" className="Type__TypeElement-sc-goli3j-0 hGqMNu">
                Also listen on
              </h5>

              <Stack direction="row" spacing={1}>
                {podcastServers?.map((service) => (
                  <a
                    key={service.title}
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-encore-id="textLink"
                    className="Link-sc-k8gsk-0 jAcOPG"
                  >
                    <div className="sc-dZHFPk dbuQdj">
                      <img src={service.imgUrl} alt={service.title} height="36" width="36" />
                    </div>
                  </a>
                ))}

                <a
                  href="https://anchor.fm/s/f1be601c/podcast/rss"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-encore-id="textLink"
                  className="Link-sc-k8gsk-0 jAcOPG"
                >
                  <div className="sc-dZHFPk dbuQdj">
                    <svg
                      width="36"
                      height="36"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                      className=""
                    >
                      <g fill="none" fillRule="evenodd">
                        <rect fill="#FE8A4C" width="36" height="36" rx="6" />
                        <path
                          d="M6.822 18.5361504c.74088889 0 1.36666667.2645781 1.87755556.7932873.51866666.5139607.77777777 1.1398755.77777777 1.877074 0 .7371984-.25911111 1.3666886-.77777777 1.888247-.51088889.5139608-1.13666667.7707177-1.87755556.7707177-.73355556 0-1.35555556-.2567569-1.86666667-.7707177-.51088889-.5215584-.76644444-1.1508251-.76644444-1.888247 0-.737422.25555555-1.3633368.76644444-1.877074.51133334-.5289327 1.13311111-.7932873 1.86666667-.7932873zm-2.54422222-6.9831622c.17022222-.1937408.38488889-.3054714.644-.3351918v-.011173h1.08888889c2.97044444 0 5.51133333 1.0576418 7.62244443 3.1731489 2.1111111 2.1003117 3.1775556 4.6441939 3.2 7.6309762v1.0614406h-.0113333c-.0222222.2382097-.1184445.4431236-.2891111.6145183-.1702223.1713947-.3775556.2719523-.622.3018961v.011173h-1.8555556c-.2595555-.0073742-.4853333-.0969821-.678-.2681534-.1926667-.1861432-.3037778-.4058055-.3333333-.6592105h-.0113334v-1.0614407h.0113334c-.0222222-1.9291404-.7148889-3.5791778-2.0777778-4.9494419-1.38533333-1.3633367-3.03733333-2.0446699-4.95577778-2.0446699h-.04355555v.0111731H4.92177778v-.0111731c-.23688889-.0299438-.44444445-.126479-.622-.2904995-.17066667-.1713947-.26311111-.379884-.27777778-.6256913H4v-1.8661244c.01466667-.2607792.10711111-.4880393.27777778-.6815567zM4 6.89382242v-1.877074c.01466667-.26077921.10711111-.48803924.27777778-.68155663.17022222-.19374086.38488889-.30547145.644-.33519179h1.08888889C10.9515556 4 15.1813333 5.75774572 18.6995556 9.27368409 22.2182222 12.7967732 23.9848889 17.0425358 24 22.0109719v1.0614407h-.0113333c-.0295556.2382096-.1257778.4431235-.2891111.6145183-.1702223.1713947-.3775556.2719522-.622.301896V24h-1.8553334c-.2595555-.0073742-.4853333-.0969822-.678-.2681534-.1926666-.1861432-.3037778-.4058056-.3333333-.6592105h-.0113333v-1.0614407h.0113333c-.0146667-3.918392-1.4108889-7.2627121-4.1886667-10.0336309-2.7704444-2.78589066-6.10755553-4.17872426-10.01133331-4.17872426h-.04422222v.01117306H4.92177778v-.01117306c-.23688889-.02256958-.44444445-.11910482-.622-.29049955-.17066667-.1716182-.26311111-.37630865-.27777778-.61451827H4z"
                          fill="#FFF"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </div>
                </a>
              </Stack>
            </div>
          </Stack>
        </Grid>
        <Divider />
        <MKBox px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </Card>
    </>
  );
}

export default PodcastsPage;
