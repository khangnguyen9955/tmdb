import { makeStyles } from "@material-ui/core";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import { AppBar, Toolbar, Collapse } from "@material-ui/core/";
import Search from "./Search";
import { useEffect, useRef, useState } from "react";
const useStyles = makeStyles((theme) => ({
  subDiv: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    top: 0,
    left: 0,
    width: 1300, // can phai dat ten bien cho nay
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 40,
    paddingRight: 40,
  },
  div: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: 40,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    height: 64,
    width: "100%",
    zIndex: 10,
    backgroundColor: "rgba(3,37,65,1)",
  },
  wrapper: {
    width: "100%",
    top: 64,
    position: "absolute",
    left: 0,
  },
  collapse: {
    width: "100%",
    minHeight: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderBottom: "1px solid rgba(227,227,227,1)",
  },
  search: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    top: 0,
    left: 0,
    maxWidth: 1300,
    width: "100%",
    padding: "0 40px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);

  function useOutside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutside(searchRef);
  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      searchRef.current.focus();
    }, 0);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.header}>
      <div className={classes.div}>
        <div className={classes.subDiv}>
          <LeftNav />
          <RightNav
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </div>
      </div>
      <Collapse in={open} className={classes.wrapper}>
        <Toolbar className={classes.collapse}>
          <Search
            paddingLeft={0}
            handleClose={handleClose}
            searchRef={searchRef}
          />
        </Toolbar>
      </Collapse>
    </div>
  );
};
export default Header;
