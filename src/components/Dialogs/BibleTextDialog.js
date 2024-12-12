import React, { useEffect, useRef, useState } from "react";
// import Button from "components/CustomButtons/Button.js";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import PropTypes from "prop-types";
// import DialogTitle from '@mui/material/DialogTitle';
import getEsvText from "services/API";
import { Skeleton, Typography } from "@mui/material";
import MKButton from "components/MKButton";
// import ReactMarkdown from "react-markdown";

export default function BibleTextDialog(props) {
  const { open, setOpen, reference } = props;
  const [passage, setPassage] = useState("");
  const [loading, setLoading] = useState(true);
  const descriptionElementRef = useRef(null);
  //   const [open, setOpen] = useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    // e.preventDefualt();
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }

    const getPassage = async () => {
      // eslint-disable-next-line
      console.log(reference);
      if (reference) {
        const result = await getEsvText(reference);

        if (result) {
          // eslint-disable-next-line
          console.log(result);
          setPassage(result);
          setLoading(false);
        }
      }
    };
    getPassage(reference);
  }, [open, reference]);

  return (
    <>
      {/* <a key={key} onClick={handleClickOpen}>
        {reference}
      </a> */}
      {/* <Dialog> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        // aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        {loading ? (
          <div style={{ margin: "20px 40px 20px 40px" }}>
            <Typography variant="h3">
              <Skeleton width={100} />
            </Typography>
            <Skeleton
              variant="rectangular"
              width={220}
              height={140}
              style={{ borderRadius: "5px" }}
            />
          </div>
        ) : (
          <DialogContent dividers="paper">
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {passage ? (
                // eslint-disable-next-line
                <div dangerouslySetInnerHTML={{ __html: passage }} />
              ) : (
                //   passage.replace(/'"/g, "")
                //   <ReactMarkdown class="passage">{passage}</ReactMarkdown>
                <h4>No passage found</h4>
              )}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <MKButton onClick={handleClose}>Close</MKButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

BibleTextDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  reference: PropTypes.string.isRequired,
};
