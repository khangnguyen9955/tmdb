import React from "react";
import axios from "axios";
import { API_KEY, backdrop_url, poster_url, url } from "./config";
import no_image from "../assets/no_image.png";

const fetchCollection = async (id) => {
  try {
    const { data } = await axios.get(`${url}/collection/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return {
      ...data,
      title: data.name,
      poster_path: data.poster_path ? poster_url + data.poster_path : no_image,
      backdrop_path: data.backdrop_path
        ? backdrop_url + data.backdrop_path
        : no_image,
      vote_average: data.parts.reduce(
        (acc, cur) => acc + cur.vote_average / data.parts.length,
        0
      ),
      parts: data.parts.map((movie) => ({
        ...movie,
        media_type: "movie",
        poster_path: movie.poster_path
          ? poster_url + movie.poster_path
          : no_image,
      })),
    };
  } catch (err) {
    console.log(err);
  }
};

export default fetchCollection;
