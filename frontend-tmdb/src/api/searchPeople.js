import axios from "axios";
import no_image from "../assets/no_image.png";
import { API_KEY, poster_url, url } from "./config";

const searchPeople = async (query, page) => {
  try {
    const { data } = await axios.get(`${url}/search/person`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query,
        page,
      },
    });
    return {
      ...data,
      results: data.results.map((person) => ({
        ...person,
        profile_path: person.profile_path
          ? poster_url + person.profile_path
          : no_image,
        known_for: person.known_for.map((movie) => ({
          ...movie,
          title: movie.title ? movie.title : movie.name,
        })),
      })),
    };
  } catch (err) {
    console.log(err);
  }
};
export default searchPeople;
