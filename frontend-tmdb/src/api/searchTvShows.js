import axios from "axios";
import no_image from "../assets/no_image.png";
import { API_KEY, poster_url, url } from "./config";

const searchTvShows = async (query, page) => {
  try {
    const { data } = await axios.get(`${url}/search/tv`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query,
        page,
      },
    });
    return {
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
  } catch (err) {
    console.log(err);
  }
};
export default searchTvShows;
