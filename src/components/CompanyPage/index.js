import React, { useEffect, useState } from "react";
import Background from "../common/Background";
import BackgroundHeader from "../common/BackgroundHeader";
import { Container } from "@mui/material";
import MovieCard from "../ProfilePage/MovieCard";
import LoadMore from "../common/LoadMore";
import { useParams } from "react-router-dom";
import fetchCompany from "../../api/fetchCompany";
import Loading from "../common/Loading";
import CompanyInfo from "./CompanyInfo";

const CompanyPage = () => {
  const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadMore] = useState(false);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      if (loading) {
        setCompany(await fetchCompany(id, page));
        setLoading(false);
      } else {
        //set keyword again when clicking on load more
        setLoadMore(true);
        setCompany({
          ...company,
          movies: {
            ...company.movies,
            results: [
              ...company.movies.results,
              ...(await fetchCompany(id, page)).movies.results,
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
      <Background
        children={
          <>
            <BackgroundHeader details={company} />
            <CompanyInfo details={company} />
          </>
        }
      />
      <Container style={{ paddingTop: 30, paddingBottom: 30 }}>
        {company.movies.results.map((movie) => (
          <MovieCard movie={movie} key={movie.id} handleRemove={null} />
        ))}
        {page < company.movies.total_pages && (
          <LoadMore handleClick={handleClick} loading={loadingMore} />
        )}
      </Container>
    </>
  );
};

export default CompanyPage;
