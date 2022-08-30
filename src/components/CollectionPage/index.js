import React, { useEffect, useState } from "react";
import Header from "../MoviePage/Header";
import fetchCollection from "../../api/fetchCollection";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import { Container, Typography } from "@mui/material";
import MovieCard from "../ProfilePage/MovieCard";

const CollectionPage = () => {
  const [collection, setCollection] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      setCollection(await fetchCollection(id));
      setLoading(false);
    };
    fetchData();
  }, [id]);
  return loading ? (
    <Loading />
  ) : (
    <div>
      <Header details={collection} />
      <Container>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1.4em",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          {collection.parts.length} movies
        </Typography>
        {collection.parts.map((movie) => (
          <MovieCard key={movie.id} handleRemove={null} movie={movie} />
        ))}
      </Container>
    </div>
  );
};

export default CollectionPage;
