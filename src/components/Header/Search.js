import fetchTrending from "../../api/fetchTrending";
import searchMovies from "../../api/searchMovies";
import useDebounce from "../common/useDebounce";

import { alpha, InputBase, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: "0 !important",
    width: "100%",
  },
  searchIcon: (props) => ({
    padding: theme.spacing(0, props.paddingLeft),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: (props) => ({
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(props.paddingLeft + 2)}px)`,
    width: "100%",
  }),
}));

const Search = ({ paddingLeft = 2, searchRef, handleClose }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("the");
  const debouncedInput = useDebounce(inputValue, 500);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const trending = await fetchTrending("day");
      const trendingMovie = trending.map((movie) => {
        options.push(movie.title);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (debouncedInput) {
      const fetchData = async () => {
        const searchResults = await searchMovies(debouncedInput, 1);
        setOptions(searchResults.results.map((movie) => movie.title));
      };
      fetchData();
    }
  }, [debouncedInput]);

  const handleChange = (e, newValue) => {
    if (newValue) {
      navigate.push(`/search/movie/${newValue}/1`);
      handleClose();
    }
  };
  const handleInputChange = (e, newValue) => {
    setInputValue(newValue);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (inputValue) {
      navigate.push(`/search/movie/${inputValue}/1`);
      handleClose();
    }
  };

  return (
    <form onSubmit={getSearch} className={classes.search}>
      <Autocomplete
        freeSolo
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        options={options}
        filterOptions={(options) => options}
        ref={searchRef}
        renderInput={(params) => (
          <InputBase
            ref={searchRef}
            inputProps={{ ...params.inputProps }}
            placeholder="Search for a movie, tv show, person..."
            autoFocus
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
          />
        )}
      />
    </form>
  );
};

export default Search;
