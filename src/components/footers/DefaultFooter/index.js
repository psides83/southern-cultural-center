// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { PHONE_URL } from "data/urls";
import ESVCopyright from "../../ESVCopyright";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <MKBox>
              <Link to={brand.route}>
                <MKBox component="img" src={brand.image} alt={brand.name} maxWidth="2rem" mb={2} />
              </Link>
              <MKTypography variant="h6">{brand.name}</MKTypography>
              <MKTypography variant="button" color="text">
                <p>{brand.poBox}</p>
              </MKTypography>
              <MKTypography variant="button" color="text">
                <p>{brand.street}</p>
              </MKTypography>
              <MKTypography variant="button" color="text">
                <p>{brand.cityStateZip}</p>
              </MKTypography>
              <MKTypography
                component="a"
                href={PHONE_URL}
                variant="button"
                color="primary"
                // fontWeight="regular"
              >
                {brand.phone}
              </MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => {
                const elementKey = `${link}-${key}`;

                return (
                  <MKTypography
                    key={elementKey}
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    variant="h5"
                    color="dark"
                    opacity={0.8}
                    mr={key === socials.length - 1 ? 0 : 2.5}
                  >
                    {icon}
                  </MKTypography>
                );
              })}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
      <MKBox style={{ marginBottom: "20px" }}>
        <ESVCopyright />
      </MKBox>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.instanceOf(Object).isRequired,
};

export default DefaultFooter;
