import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import {useParams} from 'react-router-dom'

import Videos from "./Videos";

import { fetchFromAPI } from "../utils/fetchFromApi";

const SearchFeed = () => {
 

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results For  :
        <span style={{ color: "#F31503" }}> {searchTerm}</span> Videoes
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
