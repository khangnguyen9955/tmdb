import axios from "axios";
import no_image from "../assets/no_image.png";
import { API_KEY, poster_url, url } from "./config";

const searchMovies = async (query, page) => {
  try {
    const { data } = await axios.get(`${url}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query: query,
        page: page,
      },
    });
    return {
      ...data,
      results: data.results.map((movie) => ({
        ...movie,
        poster_path: movie.poster_path
          ? poster_url + movie.poster_path
          : no_image,
      })),
    };
  } catch (err) {
    console.log(err);
  }
};

export default searchMovies;
