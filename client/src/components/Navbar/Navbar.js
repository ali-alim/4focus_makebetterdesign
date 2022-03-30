import {AppBar, Typography} from '@material-ui/core'
import "./styles"

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
