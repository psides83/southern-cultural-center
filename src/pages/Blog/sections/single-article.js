// prop-types is a library for typechecking of props
// import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAvatar from "components/MKAvatar";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import useBlogPosts from "hooks/blog-hook";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import routes from "routes";
import Rellax from "rellax";
import DefaultFooter from "components/footers/DefaultFooter";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/fbce-sanctuary-original.jpg";
import { Card } from "@mui/material";
import BibleModal from "components/Modal/BibleModal";
import { Helmet } from "react-helmet";
import BlogPosts from "./Posts";

function SingleArticle() {
  const { postId } = useParams();
  const headerRef = useRef(null);
  const posts = useBlogPosts();
  const [post, setPost] = useState();

  useEffect(() => {
    if (postId && posts.length > 0) {
      console.log(posts);
      console.log(postId);
      setPost(posts.filter((item) => item.id === postId)[0]);
    }
  }, [postId, posts]);

  // Setting up rellax
  useEffect(() => {
    const parallax = new Rellax(headerRef.current, {
      speed: -6,
    });

    return () => parallax.destroy();
  }, []);

  const Open = () => " (";
  const Close = () => "). ";
  const Comma = () => ", ";

  const errorMessage = "This post could not load or does not exist";

  if (postId && posts.filter((item) => item.id === postId).length > 0) {
    return (
      <>
        <Helmet>
          <title>{`FBCE - ${post?.cardLabel}`}</title>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`FBCE - ${post?.cardLabel}`} />
          <meta property="og:image" content={post?.image} />
          <meta name="description" content={post?.cardDescription} />
          <meta name="keywords" content="church, god, christian, christ, christianity, salvation" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`FBCE Blog - ${post?.title}`} />
          <meta name="twitter:image" content={post?.image} />
        </Helmet>
        <DefaultNavbar routes={routes} />

        <MKBox
          ref={headerRef}
          minHeight="75vh"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.4),
                rgba(gradients.dark.state, 0.2)
              )}, url(${post?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />

        <Card
          sx={{
            mt: -14,
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKBox component="section" width="100%" display="flex" justifyContent="center">
            <Grid
              container
              spacing={2}
              sx={{
                m: "20px 20px",
                maxWidth: "800px",
                justifySelf: "center",
                alignSelf: "center",
              }}
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <MKBox display="flex" alignItems="center" mt={3}>
                  <MKAvatar
                    src={post?.authorImage}
                    alt={post?.author}
                    shadow="md"
                    variant="circular"
                  />
                  <MKBox pl={2} lineHeight={0}>
                    <MKTypography component="h6" variant="button" fontWeight="medium" gutterBottom>
                      {post?.author}
                    </MKTypography>
                    <MKTypography variant="caption" color="text">
                      {post?.date}
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <MKTypography
                  component="h6"
                  // variant="button"
                  opacity={0.7}
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  {post?.seriesTitle}
                </MKTypography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <MKTypography variant="h3" mb={3}>
                  {post?.title}
                </MKTypography>
              </Grid>
              <MKTypography component="p" variant="body2">
                {post?.paragraphs?.map((paragraph, index) => (
                  // eslint-disable-next-line
                  <Fragment key={index}>
                    {paragraph.sections?.map((section, sectionIndex) => (
                      // eslint-disable-next-line
                      <Fragment key={sectionIndex}>
                        {section.header ? (
                          <strong>{section.header && `${section.header}: `}</strong>
                        ) : null}

                        {section.text}

                        {section.references?.map((reference, referenceIndex) => (
                          // eslint-disable-next-line
                          <Fragment key={referenceIndex}>
                            {referenceIndex === 0 && <Open />}
                            <BibleModal key={reference} reference={reference} />
                            {referenceIndex !== section.references.length - 1 && <Comma />}
                            {referenceIndex === section.references.length - 1 && <Close />}
                          </Fragment>
                        ))}

                        {section.quote ? (
                          <MKBox display="flex" justifyContent="center" justifySelf="center">
                            <MKTypography
                              variant="body2"
                              alignSelf="center"
                              width="75%"
                              dangerouslySetInnerHTML={{ __html: section.quote }}
                            />
                          </MKBox>
                        ) : null}
                      </Fragment>
                    ))}
                    <br />
                    <br />
                  </Fragment>
                ))}
              </MKTypography>
              <BlogPosts
                posts={posts.filter((postIn) => postIn.id !== postId).slice(0, 3)}
                title="Other Recent Posts"
              />
            </Grid>
          </MKBox>
        </Card>
        <MKBox px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
    );
  }
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
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 75%",
          display: "grid",
          placeItems: "center",
        }}
      />

      <Card
        sx={{
          mt: -14,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKTypography component="h1" fontWeight="medium" sx={{ mx: "auto", my: "100px" }}>
          {errorMessage}
        </MKTypography>
      </Card>
      <MKBox px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

// SingleArticle.defaultProps = {
//   postParam: {},
// };

// // Typechecking props for the DefaultBlogCard
// SingleArticle.propTypes = {
//   postParam: PropTypes.instanceOf(Object),
// };

export default SingleArticle;
