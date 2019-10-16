import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterSections from "./RouterSections";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <main className="main">{<RouterSections />}</main>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
