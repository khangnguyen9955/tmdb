import { makeStyles } from "@material-ui/core";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const useStyles = makeStyles(() => ({
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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.div}>
        <div className={classes.subDiv}>
          <LeftNav />
          <RightNav />
        </div>
      </div>
    </div>
  );
};
export default Header;
