import { API_KEY, url, logo_url } from "./config";
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
    const modifiedData = {
      ...data,
      logo_path: data.logo_path ? logo_url + data.logo_path : no_image,
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
export default fetchNetwork;
