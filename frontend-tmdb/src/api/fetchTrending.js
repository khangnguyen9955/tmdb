import axios from "axios";
import no_image from "../assets/no_image.png";
import { API_KEY, backdrop_url, poster_url, url } from "./config";

const fetchTrending = async (time) => {
  try {
    const { data } = await axios.get(`${url}/trending/all/${time}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    return data.results.map((movie) => ({
      ...movie,
      title: movie.title ? movie.title : movie.name,
      poster_path: movie.poster_path
        ? poster_url + movie.poster_path
        : no_image,
      backdrop_path: backdrop_url + movie.backdrop_path,
      release_date: movie.release_date
        ? movie.release_date
        : movie.first_air_date,
    }));
  } catch (err) {
    console.log(err);
  }
};

export default fetchTrending;
