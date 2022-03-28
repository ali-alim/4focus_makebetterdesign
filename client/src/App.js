import React from 'react'
import todo from "./images/todo.png"
import useStyles from './styles' 
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import {useEffect} from "react"
import { useDispatch } from 'react-redux'
import {getPosts} from "./actions/posts"
import "./index.css"

function App() {
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    },[dispatch]);
    return (
    <Container maxwidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography className={classes.heading} variant="h6" align="center">THIS APP HELPS YOU TO</Typography>
            <img className={classes.image} src={todo} alt="todo_cards" height="60" />
        </AppBar>
        <Grow in>
            <Container >
                <Grid className={classes.mainContainer} container justify='space-between' direction="column-reverse" alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    )
}

export default App;
