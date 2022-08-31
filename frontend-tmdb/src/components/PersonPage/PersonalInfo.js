import { CardMedia, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 0,
    paddingTop: "150%",
    margin: "auto",
    // [theme.breakpoints.down("sm")]: {
    //   width: "50%",
    //   paddingTop: "75%",
    // },
  },
  icons: {
    display: "flex",
    alignItems: "center",
    margin: 8,
    "& > a": {
      marginRight: 8,
    },
  },
}));

const PersonalInfo = ({ person }) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <CardMedia
          image={person.profile_path}
          title={person.name}
          className={classes.cardMedia}
        />
      </div>
      <div className={classes.icons}>
        {person.external_ids.twitter_id && (
          <Tooltip title="Visit Twitter" arrow>
            <a
              href={person.external_ids.twitter_id}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black" }}
            >
              <TwitterIcon fontSize="large" />
            </a>
            
          </Tooltip>
        )}
        {person.external_ids.instagram_id && (
          <Tooltip title="Visit Instagram" arrow>
            <a
              href={person.external_ids.instagram_id}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black" }}
            >
              <InstagramIcon fontSize="large" />
            </a>
          </Tooltip>
        )}
      </div>
      <div>
        <Typography variant="h6">Personal Info</Typography>
      </div>
      <div>
        <Typography variant="subtitle1">Known for</Typography>
        <Typography>{person.known_for_department}</Typography>
      </div>
      <div>
        <Typography variant="subtitle1">Gender</Typography>
        <Typography>{person.gender}</Typography>
      </div>
      <div>
        <Typography variant="subtitle1">Birthday</Typography>
        <Typography>{person.birthday}</Typography>
      </div>
      <div>
        <Typography variant="subtitle1">Place of birth</Typography>
        <Typography>{person.place_of_birth}</Typography>
      </div>
      <div>
        <Typography variant="subtitle1">Also known as</Typography>
        <div>
          {person.also_known_as.map((title, index) => (
            <Typography key={index}>{title}</Typography>
          ))}
        </div>
      </div>
    </>
  );
};
export default PersonalInfo;
