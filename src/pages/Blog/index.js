import { useEffect, useRef, useState } from "react";

// rellax
import Rellax from "rellax";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/fbce-sanctuary-original.jpg";

// Membership page sections
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/footers/DefaultFooter";
import { useParams } from "react-router-dom";
// import siteData from "services/json-data-api";
import useBlogPosts from "hooks/blog-hook";
import BlogPosts from "./sections/Posts";

function BlogPage() {
  const { postId } = useParams();
  const headerRef = useRef(null);
  const [post, setPost] = useState();
  const [image, setImage] = useState(bgImage);

  const posts = useBlogPosts();

  useEffect(() => {
    if (postId) {
      setPost(posts?.filter((item) => item?.id === postId)[0]);
      setImage(post.image);
    }

    console.log(postId);
  }, [postId]);
  // Setting up rellax
  useEffect(() => {
    const parallax = new Rellax(headerRef.current, {
      speed: -6,
    });

    return () => parallax.destroy();
  }, []);

  return (
    <>
      <DefaultNavbar routes={routes} />

      <MKBox
        ref={headerRef}
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.9),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: postId ? "center" : "50% 75%",
          display: "grid",
          placeItems: "center",
        }}
      >
        {postId ? null : (
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
                Articles
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                opacity={0.8}
                mb={2}
                mr={{ xs: 0, sm: 6 }}
                pr={{ xs: 0, sm: 6 }}
              >
                Thoughts and commentaries from our pastors.
              </MKTypography>
              <MKTypography variant="h5" color="white" mt={2} mb={1}>
                Connect with us on
              </MKTypography>
              <MKBox display="flex" alignItems="center">
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href="https://www.facebook.com/groups/FirstBaptistEclectic"
                  mr={3}
                >
                  <i className="fab fa-facebook" />
                </MKTypography>
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href="https://www.instagram.com/fbcglorybound/"
                  mr={3}
                >
                  <i className="fab fa-instagram" />
                </MKTypography>
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href="https://www.youtube.com/channel/UCqOE4fLVedJ2vu_M9Yn_y3w"
                  mr={3}
                >
                  <i className="fab fa-youtube" />
                </MKTypography>
              </MKBox>
            </Grid>
          </Container>
        )}
      </MKBox>

      <Card
        sx={{
          mt: -14,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <BlogPosts posts={posts} title="Blog Posts" />
      </Card>
      <MKBox px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default BlogPage;
