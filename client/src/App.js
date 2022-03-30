import React from 'react'
import useStyles from './styles' 
import {Container, Grow, Grid} from "@material-ui/core"
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import {useState, useEffect} from "react"
import { useDispatch } from 'react-redux'
import {getPosts} from "./actions/posts"
import "./index.css"
import Navbar from './components/Navbar/Navbar'

function App() {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    },[currentId, dispatch]);
    
    return (
    <Container maxwidth="lg">
        <Navbar />
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
