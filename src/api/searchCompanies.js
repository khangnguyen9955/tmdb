import axios from "axios";
import { API_KEY, logo_url, url } from "./config";

const searchCompanies = async (query, page) => {
  try {
    const { data } = await axios.get(`${url}/search/company`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query,
        page,
      },
    });
    return {
      ...data,
      results: data.results.map((company) => ({
        ...company,
        logo_path: company.logo_path ? logo_url + company.logo_path : "",
      })),
    };
  } catch (err) {
    console.log(err);
  }
};
export default searchCompanies;
