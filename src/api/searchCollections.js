import axios from "axios";
import no_image from "../assets/no_image.png";
import { API_KEY, poster_url, url } from "./config";

import React from "react";

const searchCollections = async (query, page) => {
  try {
    const { data } = await axios.get(`${url}/search/collection`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query,
        page,
      },
    });
    return {
      ...data,
      results: data.results.map((collection) => ({
        ...collection,
        title: collection.name,
        poster_path: collection.poster_path
          ? poster_url + collection.poster_path
          : no_image,
      })),
    };
  } catch (err) {
    console.log(err);
  }
};

export default searchCollections;
