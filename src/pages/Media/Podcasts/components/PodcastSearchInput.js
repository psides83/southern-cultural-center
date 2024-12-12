/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/**
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";

// @mui icons
import SearchIcon from "@mui/icons-material/Search";

// Otis Kit PRO components
import MKInput from "components/MKInput";

function SearchInput({ searchTerm, setSearchTerm }) {
  return (
    <Container>
      <Grid container item xs={12} lg={4} py={1} mx="auto">
        <MKInput
          variant="standard"
          color="primary"
          //   fullWidth
          style={{ minWidth: "200px" }}
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Container>
  );
}

export default SearchInput;
