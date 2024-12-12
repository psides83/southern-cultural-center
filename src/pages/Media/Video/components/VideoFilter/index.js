/* eslint-disable */
import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MKTypography from "components/MKTypography";
import {
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Stack,
  Tooltip,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import MKInput from "components/MKInput";

function VideoFilter({ playlists, activePlaylist, setActivePlaylist }) {
  const handleTabType = (event, newValue) => {
    // setPage(0);
    // setPageToken(undefined);
    setActivePlaylist(event.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event);
    setActivePlaylist(playlists[event.target.value]);
    setAnchorEl(null);
  };

  return (
    <Container>
      {/* <Grid container item justifyContent="center" xs={12} lg={4} mx="auto"> */}
      <Stack direction="row" justifyContent="center" alignItems="center">
        <MKTypography variant="h5" my={2}>
          {activePlaylist.title}
        </MKTypography>
        {/* <AppBar position="static" sx={{ zIndex: 1 }}> */}
        {/* <Tabs value={activePlaylist} onChange={handleTabType} indicatorColor="primary">
              {playlists.map((tab) => (
                <Tab key={tab.id} label={tab.title} value={tab} sx={{ fontSize: ".9rem" }} />
              ))}
            </Tabs> */}

        {/* <Tooltip title="Select Playlist">
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <FilterAlt />
          </IconButton>
        </Tooltip> */}
        {/* <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {playlists.map((option) => (
            <MenuItem key={option.id} value={option} onClick={handleClose}>
              {option.title}
            </MenuItem>
          ))}
        </Menu> */}

        <FormControl sx={{ m: 2, minWidth: 100 }}>
          <InputLabel id="demo-multiple-name-label">Filter</InputLabel>
          <Select
            labelId="filter"
            id="filter"
            value={activePlaylist}
            label="Filter"
            onChange={handleTabType}
            autoWidth
            inputProps={{ padding: "40px" }}
          >
            {playlists.map((playlist) => (
              <MenuItem key={playlist.id} value={playlist}>
                {playlist.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      {/* </AppBar> */}
      {/* </Grid> */}
    </Container>
  );
}

export default VideoFilter;
