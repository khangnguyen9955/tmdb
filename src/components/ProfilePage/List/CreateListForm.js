import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import {
  Container,
  FormControl,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addNewList } from "../../../redux/listsActions";

const useStyles = makeStyles((theme) => ({
  layer: {
    width: 750,
    height: 200,
    overflow: "hidden",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
  },
  container: {
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "fixed",
    minWidth: "100%",
    minHeight: "100%",
    zIndex: 99999999,
    display: "flex",
    pointerEvents: "auto",
    justifyContent: "center",
    overflow: "hidden scroll",
    alignItems: "center",
    transition: "all 0.2s ease-in 0s",
    padding: "48px 0px",
    boxSizing: "border-box",
  },
  formControl: {
    width: "100%",
    borderRadius: 4,
    border: "1px solid",
  },
}));

const CreateListForm = (props) => {
    const createListForm = () => {
        props.createListForm();
    };
    const classes = useStyles();
    const [nameList, setNameList] = useState("");
    const dispatch = useDispatch();
    const handleCreateNewList = () => {
        const newList = {
            listName: nameList,
            listMovie: [],
        };
        if (nameList === "") {
            alert("Please input list title!");
        } else {
            dispatch(addNewList(newList));
            createListForm();
        }

    };

    return (
        <Container className={classes.container}>
            <div className={classes.layer}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingBottom: 8,
                    }}
                >
                    <Typography
                        sx={{
                            width: "100%",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "1.1em",
                        }}
                    >
                        Title list
                    </Typography>
                    <CloseIcon
                        style={{fontSize: 25, cursor: "pointer"}}
                        onClick={createListForm}
                    />
                </div>

                <FormControl className={classes.formControl}>
                    <OutlinedInput
                        placeholder="Please enter tile of the list"
                        onInput={(e) => {
                            setNameList(e.target.value);
                        }}
                    />
                </FormControl>

                <div style={{paddingTop: 25}}>
                    <Button
                        style={{
                            marginRight: 30,
                            fontSize: "1em",
                            alignItems: "center",
                            justifyContent: "center",
                            textTransform: "capitalize",
                            color: "#fff",
                            fontWeight: 600,
                            backgroundColor: "rgba(128,91,231,1)",
                            borderColor: "#805be7",
                            borderRadius: 5,
                            minWidth: 100,
                        }}
                        onClick={handleCreateNewList}
                    >
                        Create list
                    </Button>
                    <Button
                        style={{
                            minWidth: 100,
                            marginRight: 30,
                            fontSize: "1em",
                            alignItems: "center",
                            textTransform: "capitalize",
                            color: "#fff",
                            fontWeight: 600,
                            backgroundColor: "rgba(128,91,231,1)",
                            borderColor: "#805be7",
                            borderRadius: 5,
                        }}
                        onClick={createListForm}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default CreateListForm;
