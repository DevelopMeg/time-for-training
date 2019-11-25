import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterSections from "./RouterSections";
import Header from "./Header";
import Footer from "./Footer";
import "../../sass/style.scss";

class App extends Component {
  state = {
    navActive: false
  };

  handleNav = () => {
    this.setState(prevState => ({
      navActive: !prevState.navActive
    }));
  };

  componentDidUpdate() {
    if (this.state.navActive && window.innerWidth < 1024) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Header handleNav={this.handleNav} navActive={this.state.navActive} />
          <main className={this.state.navActive ? "main--active" : "main"}>
            {<RouterSections />}
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
