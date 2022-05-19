import {makeStyles} from "@material-ui/core";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import {AppBar, Collapse, Toolbar} from "@material-ui/core/";
import Search from "./Search";
import {useEffect, useRef, useState} from "react";

const useStyles = makeStyles((theme) => (
    {
        header: {
            flexGrow: 1,
            maxHeight: 64,
        },
        collapse: {
            backgroundColor: "white",
            zIndex: 1,
        },
        search: {
            minHeight: "auto",
            [theme.breakpoints.down("sm")]: {
                paddingLeft: theme.spacing(2),
            },
        },
        alignHeader: {
            margin: "auto",
            width: "100%",
            maxWidth: 1280,

        }
    }
));

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
            <AppBar position="static">
                <Toolbar className={classes.alignHeader}>
                    <LeftNav/>
                    <div className={classes.header}/>

                    <RightNav
                        open={open}
                        handleOpen={handleOpen}
                        handleClose={handleClose}
                    />
                </Toolbar>
            </AppBar>
            <Collapse in={open} className={classes.collapse}>
                <Toolbar className={classes.search}>
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
