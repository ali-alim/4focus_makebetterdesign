import React from 'react'
import {BrowserRouter,  Switch, Route } from "react-router-dom"
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
        <Home />
    </Container>
    )
}

export default App;
