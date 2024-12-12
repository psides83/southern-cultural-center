// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Otis Kit PRO examples
import BlogArticleCard from "./BlogArticleCard";

// Images

function BlogPosts({ posts, title }) {
  return (
    <MKBox component="section" py={7}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={9} textAlign="center" mx="auto">
            <MKTypography variant="h3" mb={0.5}>
              {title}
            </MKTypography>
            <MKTypography variant="body2" color="text" px={{ xs: 0, md: 6 }} mb={4}>
              {" "}
            </MKTypography>
          </Grid>
          {posts.map((post) => (
            <Grid key={post.id} item xs={12} lg={4} mb={{ xs: 4, lg: 4 }}>
              <BlogArticleCard
                image={post.image}
                category={{ color: "primary", label: post.cardLabel }}
                title={post.title}
                description={post.cardDescription}
                author={{
                  image: post.authorImage,
                  name: post.author,
                  date: post.date,
                }}
                action={{ type: "internal", route: `/blog-posts/single-article/${post.id}` }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

BlogPosts.defaultProps = {
  posts: [],
};

// Typechecking props for the DefaultBlogCard
BlogPosts.propTypes = {
  posts: PropTypes.instanceOf(Array),
  title: PropTypes.string.isRequired,
};

export default BlogPosts;
