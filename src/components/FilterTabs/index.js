/* eslint-disable */
import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MKTypography from "components/MKTypography";
import { Stack } from "@mui/material";

function FilterTabs({ tabs, activeTab, setActiveTab }) {
  const handleTabType = (event, newValue) => {
    // setPage(0);
    // setPageToken(undefined);
    setActiveTab(newValue);
  };

  // const handleYearChange = (event) => {
  //   setSelectedyear(event.target.value);
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event);
    setActiveTab(playlists[event.target.value]);
    setAnchorEl(null);
  };

  return (
    <Container>
      {/* <Grid container item justifyContent="center" xs={12} lg={4} mx="auto"> */}
      <Stack direction="row" justifyContent="center" alignItems="center">
        {/* <AppBar position="static" sx={{ zIndex: 1 }}> */}
        <Tabs value={activeTab} onChange={handleTabType} indicatorColor="primary">
          {tabs.map((tab) => (
            <Tab key={tab} label={tab} value={tab} sx={{ fontSize: ".9rem" }} />
          ))}
        </Tabs>

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

        {/* <FormControl sx={{ m: 2, minWidth: 100 }}>
          <InputLabel id="demo-multiple-name-label">Filter</InputLabel>
          <Select
            labelId="filter"
            id="filter"
            value={activeTab}
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
        </FormControl> */}
      </Stack>
      {/* </AppBar> */}
      {/* </Grid> */}
    </Container>
  );
}

export default FilterTabs;
