import React from 'react';
import {AppBar, Typography} from '@material-ui/core'
import useStyles from "./styles"
import todo from "../../images/todo.png"
const Navbar = () => {
    const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h6" align="center">
        THIS APP HELPS YOU TO
      </Typography>
      <img className={classes.image} src={todo} alt="todo_cards" height="60" />
    </AppBar>
  );
};

export default Navbar;
