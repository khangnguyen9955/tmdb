import React from "react";
import axios from "axios";
import { API_KEY, logo_url, poster_url, url } from "./config";
import no_image from "../assets/no_image.png";

const fetchCompany = async (id, page) => {
  try {
    const { data } = await axios.get(`${url}/company/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "movies",
        page,
      },
    });
    console.log(data);
    return {
      ...data,
      logo_path: data.logo_path ? logo_url + data.logo_path : "",
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

export default fetchCompany;
