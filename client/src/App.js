import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
class App extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <Jumbotron />
            <About />
            <Works />
            <Contact/>

            </div>
        )
    }
}

export default App;