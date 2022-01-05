import axios from "axios";
import no_image from "../assets/no_image.png";
import { API_KEY, url, poster_url } from "./config";

const popularMovies = async (page) => {
  try {
    const { data } = await axios.get(`${url}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page,
      },
    });
    const modifiedData = {
      ...data,
      results: data.results.map((movie) => ({
        ...movie,
        poster_path: movie.poster_path
          ? poster_url + movie.poster_path
          : no_image,
      })),
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
export default popularMovies;
