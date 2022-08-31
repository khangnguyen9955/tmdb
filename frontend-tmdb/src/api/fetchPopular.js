import axios from "axios";
import { API_KEY, backdrop_url, poster_url, url } from "./config";
import no_image from "../assets/no_image.png";

export const fetchPopular = async (type) => {
  try {
    const { data } = await axios.get(`${url}/${type}/popular`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    return data.results.map((movie) => ({
      ...movie,
      media_type: type,
      title: movie.title ? movie.title : movie.name,
      poster_path: movie.poster_path
        ? poster_url + movie.poster_path
        : no_image,
      backdrop_path: movie.backdrop_path
        ? backdrop_url + movie.backdrop_path
        : no_image,
      release_date: movie.release_date
        ? movie.release_date
        : movie.first_air_date,
    }));
  } catch (err) {
    console.log(err);
  }
};
