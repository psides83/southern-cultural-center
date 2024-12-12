// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function SimpleBackgroundCard({ color, image, title, subtext, description, contactLink }) {
  return (
    <Card
      sx={({
        palette: { gradients },
        functions: { rgba, linearGradient },
        borders: { borderRadius },
      }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.75),
          rgba(gradients[color] ? gradients[color].state : gradients.info.state, 1)
        )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "65% 50%",
        borderRadius: borderRadius.xl,
        height: "100%",
        display: "grid",
        placeItems: "center",
      })}
    >
      <MKBox pt={32} pb={3} px={3}>
        <MKTypography variant="h4" color="white" mb={1}>
          {title}
        </MKTypography>
        <MKTypography variant="h6" color="white" mb={1}>
          {subtext}
        </MKTypography>
        <MKTypography variant="body2" color="white" mb={2}>
          {description}
        </MKTypography>
        <MKTypography
          variant="body2"
          color="white"
          mb={2}
          dangerouslySetInnerHTML={{ __html: contactLink }}
        />
      </MKBox>
    </Card>
  );
}

// Setting default values for the props of SimpleBackgroundCard
SimpleBackgroundCard.defaultProps = {
  color: "info",
  subtext: "",
  contactLink: "",
};

// Typechecking props for the SimpleBackgroundCard
SimpleBackgroundCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  description: PropTypes.node.isRequired,
  contactLink: PropTypes.string,
};

export default SimpleBackgroundCard;
