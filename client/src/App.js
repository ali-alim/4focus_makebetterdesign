import React from 'react'
import todo from "./images/todo.jpg"
import useStyles from './styles' 
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
function App() {
    const classes = useStyles();
  return (
    <Container maxwidth="lg">
        <AppBar position='static' color='inherit'>
            <Typography variant="h2" align="center">To-Do Cards</Typography>
            <img src={todo} alt="todo_cards" height="60" />
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    )
}

export default App;
