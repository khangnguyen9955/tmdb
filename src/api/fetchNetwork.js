import { API_KEY, logo_url, url } from "./config";
import no_image from "../assets/no_image.png";
import axios from "axios";

const fetchNetwork = async (id) => {
  try {
    const { data } = await axios.get(`${url}/network/${id}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    return {
      ...data,
      logo_path: data.logo_path ? logo_url + data.logo_path : no_image,
    };
  } catch (err) {
    console.log(err);
  }
};
export default fetchNetwork;
