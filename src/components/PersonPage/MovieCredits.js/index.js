import { FormControl, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import sortByDepartment from "../../common/sortByDepartment";
import CreditTable from "./CreditTable";

const useStyles = makeStyles((theme) => ({
  movieCredits: {
    position: "relative",
    "& > div": {
      marginBottom: 8,
    },
  },
  formControl: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

const MovieCredits = ({ cast, crew }) => {
  const classes = useStyles();
  const [value, setValue] = useState("all");
  const modifiedCrew = sortByDepartment(crew);
  console.log("crew", modifiedCrew);
  console.log("cast", cast);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={classes.movieCredits}>
      <FormControl className={classes.formControl}>
        <Select value={value} onChange={handleChange} disableUnderline>
          <MenuItem value="all">All ({cast.length + crew.length})</MenuItem>
          {cast.length > 0 && (
            <MenuItem value="acting">Acting ({cast.length})</MenuItem>
          )}
          {/*  sort crew department, we need to create a function to do this */}
          {modifiedCrew.map((crew) => (
            <MenuItem value={crew.department} key={crew.department}>
              {crew.department} ({crew.data.length})
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {value === "all" ? (
        <>
          {cast.length > 0 && (
            <CreditTable department="acting" credits={cast} />
          )}
          {modifiedCrew.length > 0 &&
            modifiedCrew.map((crew) => (
              <CreditTable
                key={crew.department}
                department={crew.department}
                credits={crew.data}
              />
            ))}
        </>
      ) : value === "acting" ? (
        <CreditTable department="acting" credits={cast} />
      ) : (
        modifiedCrew
          .filter((crew) => crew.department === value)
          .map((crew) => (
            <CreditTable
              key={crew.department}
              department={crew.department}
              credits={crew.data}
            />
          ))
      )}
    </div>
  );
};

export default MovieCredits;
