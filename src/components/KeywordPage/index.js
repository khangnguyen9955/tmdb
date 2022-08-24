import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import fetchKeyword from "../../api/fetchKeyWord";
import { useParams } from "react-router-dom";
import Background from "../common/Background";
import BackgroundHeader from "../common/BackgroundHeader";
import { Container } from "@mui/material";
import MovieCard from "../ProfilePage/MovieCard";
import LoadMore from "../common/LoadMore";

const KeyWordPage = () => {
  const [keyword, setKeyword] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadMore] = useState(false);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      if (loading) {
        setKeyword(await fetchKeyword(id, page));
        setLoading(false);
      } else {
        //set keyword again when clicking on load more
        setLoadMore(true);
        setKeyword({
          ...keyword,
          movies: {
            ...keyword.movies,
            results: [
              ...keyword.movies.results,
              ...(await fetchKeyword(id, page)).movies.results,
            ],
          },
        });
        setLoadMore(false);
      }
    };
    fetchData();
  }, [id, page]);
  const handleClick = () => {
    setPage(page + 1);
  };
  return loading ? (
    <Loading />
  ) : (
    <>
      <Background children={<BackgroundHeader details={keyword} />} />
      <Container style={{ paddingTop: 30, paddingBottom: 30 }}>
        {keyword.movies.results.map((movie) => (
          <MovieCard movie={movie} id={movie.id} handleRemove={null} />
        ))}
        {page < keyword.movies.total_pages && (
          <LoadMore handleClick={handleClick} loading={loadingMore} />
        )}
      </Container>
    </>
  );
};

export default KeyWordPage;
