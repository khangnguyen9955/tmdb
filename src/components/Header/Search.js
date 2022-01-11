import fetchTrending from "../../api/fetchTrending";
import searchMovies from "../../api/searchMovies";
import useDebounce from "../common/useDebounce";

import SearchIcon from "@mui/icons-material/Search";
import { alpha, InputBase, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
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
    padding: 20,
    height: "100%",
    position: "absolute",
    top: 0,
    right: -1,
    padding: "10px 26px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  }),
  inputRoot: {
    color: "inherit",
    width: "100%",
    paddingLeft: 10,
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
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const debouncedInput = useDebounce(inputValue, 300);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const trending = await fetchTrending("day");
  //     const trendingMovie = trending.map((movie) => {
  //       options.push(movie.title);
  //     });
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (debouncedInput) {
      const fetchData = async () => {
        const searchResults = await searchMovies(debouncedInput, 1);
        setOptions(searchResults.results.map((movie) => movie.title));
      };
      fetchData();
    } else {
      const fetchData = async () => {
        const searchResults = await fetchTrending("day");
        setOptions(searchResults.map((movie) => movie.title));
      };
      fetchData();
    }
  }, [debouncedInput]);
  const handleChange = (e, newValue) => {
    if (newValue) {
      navigate(`/search/movie/${newValue}/1`);
      handleClose();
    }
  };
  const handleInputChange = (e, newValue) => {
    setInputValue(newValue);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (inputValue) {
      navigate(`/search/movie/${inputValue}/1`);
      handleClose();
    }
  };
  return (
    <form onSubmit={getSearch} className={classes.search}>
      <Autocomplete
        freeSolo
        options={options}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        filterOptions={(options) => options}
        ref={searchRef}
        disableClearable
        renderInput={(params) => {
          const { InputLabelProps, InputProps, ...rest } = params;
          return (
            <InputBase
              ref={params.inputProps.ref}
              focused
              placeholder="Search for a movie, tv show, person..."
              inputProps={{ ...params.inputProps }}
              {...params.InputProps}
              {...rest}
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          );
        }}
      />
      <div className={classes.searchIcon} onClick={getSearch}>
        <SearchIcon />
      </div>
    </form>
  );
};

export default Search;
