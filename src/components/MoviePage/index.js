import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import Header from "./Header";
import fetchMovie from "../../api/fetchMovie";
const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setMovie(await fetchMovie(id));
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header details={movie} created_by={null} />
    </>
  );
};

export default MoviePage;
