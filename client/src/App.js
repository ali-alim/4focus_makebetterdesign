import React from 'react'
import todo from "./images/todo.jpg"
import useStyles from './styles' 
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import {useEffect} from "react"
import { useDispatch } from 'react-redux'
import getPosts from "./actions/posts"

function App() {
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    },[dispatch]);
    return (
    <Container maxwidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography className={classes.heading} variant="h2" align="center">To-Do Cards</Typography>
            <img className={classes.image} src={todo} alt="todo_cards" height="60" />
        </AppBar>
        <Grow in>
            <Container >
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
