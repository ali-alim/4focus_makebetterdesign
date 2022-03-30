import React from 'react'
import todo from "./images/todo.png"
import useStyles from './styles' 
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import {useState, useEffect} from "react"
import { useDispatch } from 'react-redux'
import {getPosts} from "./actions/posts"
import "./index.css"

function App() {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    },[currentId, dispatch]);
    
    return (
    <Container maxwidth="lg">
        <Grow in>
            <Container >
                <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    )
}

export default App;
