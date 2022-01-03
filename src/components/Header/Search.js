import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles(() => {});

const Search = () => {
  const classes = useStyles();
  const [debounce, setDebounce] = useState("");
  return (
    <div>
      <a></a>
    </div>
  );
};

export default Search;
