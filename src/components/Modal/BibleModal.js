import { useCallback, useEffect, useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
// import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
// import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Dialog, Skeleton, Zoom } from "@mui/material";
import getEsvText from "services/API";

function BibleModal({ reference }) {
  const [show, setShow] = useState(false);
  const [passage, setPassage] = useState("");

  const toggleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(!show);
  };

  const fetchPassage = useCallback(async () => {
    if (show) {
      const result = await getEsvText(reference);

      if (result) {
        // eslint-disable-next-line
        console.log(result);
        setPassage(result);
      }
    }
  }, [show]);

  useEffect(() => {
    fetchPassage(reference);
  }, [show]);

  return (
    <>
      <MKTypography
        component="a"
        variant="body2"
        color="primary"
        href=""
        onClick={(e) => toggleModal(e, reference)}
      >
        {reference}
      </MKTypography>
      <Dialog
        open={show}
        onClose={toggleModal}
        scroll="body"
        sx={{ display: "grid", placeItems: "center" }}
      >
        <Zoom direction="down" in={show} timeout={300}>
          <MKBox
            position="relative"
            maxWidth="500px"
            minWidth="300px"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
          >
            <MKBox display="flex" alginitems="center" justifyContent="space-between" p={2}>
              {/* <MKTypography variant="h5">{name}</MKTypography> */}
              <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox p={2}>
              <MKTypography variant="body2" color="text" fontWeight="regular">
                {passage ? (
                  <div
                    // eslint-disable-next-line
                    dangerouslySetInnerHTML={{ __html: passage }}
                    style={{ margin: "0 20px 20px 20px" }}
                  />
                ) : (
                  <>
                    <MKTypography variant="h2">
                      <Skeleton width="40%" />
                    </MKTypography>
                    <MKTypography variant="h5">
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                    </MKTypography>
                  </>
                )}
              </MKTypography>
              <MKTypography component="p" variant="caption">
                ESV®
              </MKTypography>
            </MKBox>
            <Divider sx={{ my: 0 }} />
          </MKBox>
        </Zoom>
      </Dialog>
    </>
  );
}

// Typechecking props for the HorizontalTeamCard
BibleModal.propTypes = {
  reference: PropTypes.string.isRequired,
};

export default BibleModal;
