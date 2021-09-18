import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPages from "../pages/ErrorPages";
import PostIdPages from "../pages/PostIdPages";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/about"><About/></Route>
            <Route exact path="/posts"><Posts/></Route>
            <Route exact path="/posts/:id"><PostIdPages/></Route>
            <Route path="/error"><ErrorPages/></Route>
            <Redirect to="/error"/>
        </Switch>
    );
};

export default AppRouter;