import React, { Component } from "react";

class SectionWelcome extends Component {
  constructor(props) {
    super(props);
    this.sctWelcomeRef = React.createRef();
  }

  handleScrollDown = () => {
    window.scrollTo({
      behavior: "smooth",
      top:
        this.sctWelcomeRef.current.offsetTop +
        this.sctWelcomeRef.current.offsetHeight
    });
  };

  render() {
    return (
      <section className="section-welcome" ref={this.sctWelcomeRef}>
        <div className="section-welcome__box-title">
          <h1 className="section-welcome__title">
            Welcome to Time For Training
          </h1>
          <h2 className="section-welcome__subtitle">changes start with you</h2>
        </div>
        <div className="scroll-down__box" onClick={this.handleScrollDown}>
          <i className="fas fa-angle-double-down scroll-down__sign"></i>
        </div>
      </section>
    );
  }
}

export default SectionWelcome;
