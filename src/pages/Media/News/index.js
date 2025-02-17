/* eslint-disable */
import React, { useCallback, useEffect, useRef, useState } from "react";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import { Link, Stack } from "@mui/material";
import MKTypography from "components/MKTypography";
import useNews from "hooks/news-hook";

function NewsSection() {
  const ref = useRef(null);
  const news = useNews();

  return (
    <Stack
      style={{ background: "white" }}
      justifySelf="center"
      mx="20px"
      //   shadow="lg"
      maxWidth="1080px"
      spacing="10px"
    >
      <MKTypography variant="h3" justifySelf="center" mt="20px" mx="auto">
        Newsletters
      </MKTypography>

      {news.map((month) => (
        <Link
          key={month.id}
          href={`https://psides83.github.io/listJSON/scc-news/${month.id}.pdf`}
          target="blank"
        >
          {month.title}
        </Link>
      ))}

      <MKTypography variant="caption">
        * Click on a listed event to opent he flyer for the event.
      </MKTypography>
    </Stack>
  );
}

export default NewsSection;
