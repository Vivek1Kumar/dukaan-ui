import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import StoreMode from "./components/storeMode/header/index";
import Home from "./components/home/index";
import Mobile from "./components/mobile/index";

export default class App extends Component {
    render() {
        return(
            <>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/store" component={StoreMode} />
                    <Route exact path="/mobile" component={Mobile} />
                </BrowserRouter>
            </>
        )
    }
}