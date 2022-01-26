import React from "react";
import axios from "axios";
import {
  API_KEY,
  url,
  poster_url,
  backdrop_url,
  video_url,
  logo_url,
} from "./config";
import no_image from "../assets/no_image.png";

const fetchTV = async (id) => {
  try {
    const { data } = await axios.get(`${url}/tv/${id}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        append_to_response:
          "content_ratings,credits,videos,recommendations,keywords",
      },
    });
    const modifiedData = {
      ...data,
      media_type: "tv",
      title: data.name,
      runtime: data.episode_run_time[0],
      release_date: data.first_air_date,
      poster_path: data.poster_path ? poster_url + data.poster_path : no_image,
      backdrop_path: data.backdrop_path
        ? backdrop_url + data.backdrop_path
        : no_image,
      release_dates: data.content_ratings.results[0]
        ? {
            iso_3166_1: data.content_ratings.results[0].iso_3166_1,
            certification: data.content_ratings.results[0].rating,
            release_date: data.first_air_date,
          }
        : {},
      seasons: data.seasons.map((season) => ({
        ...season,
        poster_path: season.poster_path
          ? poster_url + season.poster_path
          : no_image,
      })),
      credits: {
        cast: data.credits.cast.map((person) => ({
          ...person,
          profile_path: person.profile_path
            ? poster_url + person.profile_path
            : no_image,
        })),
        crew: data.credits.crew.map((person) => ({
          ...person,
          profile_path: person.profile_path
            ? poster_url + person.profile_path
            : no_image,
        })),
      },
      videos: data.videos.results[0]
        ? {
            ...data.videos.results[0],
            key: video_url + data.videos.results[0].key,
          }
        : {},
      recommendations: data.recommendations.results.map((recommendation) => ({
        ...recommendation,
        title: recommendation.name,
        backdrop_path: recommendation.backdrop_path
          ? backdrop_url + recommendation.backdrop_path
          : no_image,
      })),
      networks: data.networks[0]
        ? {
            ...data.networks[0],
            logo_path: data.networks[0].logo_path
              ? logo_url + data.networks[0].logo_path
              : "",
          }
        : {},
      keywords: data.keywords.results,
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export default fetchTV;
