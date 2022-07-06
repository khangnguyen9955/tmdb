import React, { useState } from "react";
import Background from "../common/Background";
import { Box, Container, makeStyles, Tab, Tabs } from "@material-ui/core";
import ProfileHeader from "./ProfileHeader";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import Rating from "./Rating";
import List from "./List/List";
import CreateListForm from "./List/CreateListForm";
import Discussion from "./Discussion";
import Watchlist from "./Watchlist";
import Overview from "./Overview";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  item: {
    fontWeight: 600,
    padding: "6px 0 4px 0",
    marginRight: 40,
    borderBottom: "4px solid #fff",
  },
  tabs: {
    marginLeft: 5,
    "& .MuiTabs-flexContainer": {
      overflowY: "hidden",
    },
    "& button": {
      minWidth: 20,
      textTransform: "initial",
      fontSize: "1em",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#805be7",
    },
  },
}));

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const [showCreateListForm, setShowCreateListForm] = useState(false);

  const [category, setCategory] = useState(0);
  const classes = useStyles();

  const handleCreateListForm = () => {
    setShowCreateListForm((prevState) => !prevState);
  };

  const handleChangeCategory = (event, newValue) => {
    setCategory(newValue);
  };

  const handleNavigateWatchlist = () => {
    setCategory(3);
  };

  return (
    <>
      {showCreateListForm && (
        <CreateListForm createListForm={handleCreateListForm} />
      )}
      <div style={{ width: "100%" }}>
        <Background children={<ProfileHeader user={currentUser} />} />
      </div>
      <Box className={classes.container}>
        <Tabs
          className={classes.tabs}
          value={category}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChangeCategory}
        >
          <Tab className={classes.item} label="Overview" disableRipple />
          <Tab disableRipple className={classes.item} label="Discussion" />
          <Tab disableRipple className={classes.item} label="Rating" />
          <Tab disableRipple className={classes.item} label="Watchlist" />
          <Tab disableRipple className={classes.item} label="Lists" />
        </Tabs>
      </Box>
      <Divider />

      <Container
        style={{
          maxWidth: 1400,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {category === 0 && (
          <Overview handleNavigateWatchlist={handleNavigateWatchlist} />
        )}
        {category === 1 && <Discussion />}
        {category === 2 && <Rating />}
        {category === 3 && <Watchlist />}
        {category === 4 && <List createListForm={handleCreateListForm} />}
      </Container>
    </>
  );
};

export default ProfilePage;
