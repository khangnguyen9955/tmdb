import axios from "axios";
import no_image from "../assets/no_image.png";
import { API_KEY, url, poster_url } from "./config";

const popularTvShows = async (page) => {
  try {
    const { data } = await axios.get(`${url}/tv/popular`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page,
      },
    });
    const modifiedData = {
      ...data,
      results: data.results.map((tvShow) => ({
        ...tvShow,
        title: tvShow.name,
        poster_path: tvShow.poster_path
          ? poster_url + tvShow.poster_path
          : no_image,
        release_date: tvShow.first_air_date,
      })),
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
export default popularTvShows;
