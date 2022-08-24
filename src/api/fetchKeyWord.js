import React from "react";
import axios from "axios";
import { API_KEY, poster_url, url } from "./config";
import no_image from "../assets/no_image.png";

const fetchKeyword = async (id, page) => {
  try {
    const { data } = await axios.get(`${url}/keyword/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "movies",
        page,
      },
    });
    return {
      ...data,
      movies: {
        ...data.movies,
        results: data.movies.results.map((movie) => ({
          ...movie,
          poster_path: movie.poster_path
            ? poster_url + movie.poster_path
            : no_image,
        })),
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export default fetchKeyword;
