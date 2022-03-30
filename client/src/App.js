import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
     <Switch>
         <Route path="/" exact component={Home} />
         {/* <Route path="/auth" exact component={Auth} /> */}
     </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
