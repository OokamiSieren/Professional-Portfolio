import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Works from "./components/Works"
class App extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <Jumbotron />
            <About />
            <Works />
            </div>
        )
    }
}

export default App;