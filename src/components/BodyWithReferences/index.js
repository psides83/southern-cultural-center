import React, { Fragment } from "react";
import PropTypes from "prop-types";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import BibleModal from "components/Modal/BibleModal";
import { PHONE_URL, EMAIL_URL } from "data/urls";

function BodyWithReferences({ data }) {
  const Open = () => " (";
  const Close = () => "). ";
  const Comma = () => ", ";
  return (
    <MKBox component="section" py={6} mr={3} mt={4}>
      <Container>
        <Grid container spacing={3} item xs={12} lg={8} mx="auto">
          <MKTypography variant="h3" mb={3}>
            {data?.title}
          </MKTypography>
          <MKTypography component="p" variant="body2">
            {data.paragraphs?.map((paragraph, index) => (
              // eslint-disable-next-line
              <Fragment key={index}>
                {paragraph.sections?.map((section, sectionIndex) => (
                  // eslint-disable-next-line
                  <span key={sectionIndex}>
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
                  </span>
                ))}
                <br />
                <br />
              </Fragment>
            ))}
          </MKTypography>
          {data?.footer && (
            <MKTypography
              component="p"
              variant="body2"
              style={{ fontWeight: "bolder", textAlign: "center" }}
            >
              {data.footer?.text}
              <MKTypography component="a" color="info" href={PHONE_URL} variant="body2">
                <br />
                {data.footer?.phone}
                <br />
              </MKTypography>
              <MKTypography component="a" color="info" href={EMAIL_URL} variant="body2">
                {data.footer?.email}
              </MKTypography>
            </MKTypography>
          )}
        </Grid>
      </Container>
    </MKBox>
  );
}

BodyWithReferences.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default BodyWithReferences;
