// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function RotatingCardFront({ color, image, icon, logo, title, description }) {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      coloredShadow={color}
      minWidth="260px"
      maxWidth="400px"
      height="500px"
      position="relative"
      zIndex={2}
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85),
            rgba(gradients[color] ? gradients[color].main : gradients.info.main, 0.85)
          )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "30% 50%",
        backfaceVisibility: "hidden",
      }}
    >
      <MKBox py={12} px={3} textAlign="center" lineHeight={1}>
        {logo && (
          <MKBox
            component="img"
            maxWidth="80%"
            maxHeight="95%"
            minWidth="200px"
            alt="logo"
            src={logo}
          />
        )}
        <MKTypography variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </MKTypography>
        {icon && (
          <MKTypography variant="h2" color="white" my={2}>
            {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
          </MKTypography>
        )}
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
  color: "info",
  icon: "",
  logo: "",
  title: "",
  description: "",
};

// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
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
  icon: PropTypes.node,
  logo: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default RotatingCardFront;
