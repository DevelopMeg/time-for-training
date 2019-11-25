import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    nameNavItem: "",
    classNameDecorateDot: ""
  };

  pagesList = [
    { name: "training-list", path: "/training-list" },
    { name: "price-list", path: "/price-list" },
    { name: "trainers-info", path: "/trainers-info" }
  ];

  componentDidUpdate(prevProps, prevState) {
    if (prevState.nameNavItem !== this.state.nameNavItem) {
      this.pagesList.forEach(page => {
        if (this.state.nameNavItem === page.name) {
          this.setState({
            classNameDecorateDot: `navigation__decorate-dot--${page.name}`
          });
        }
      });
    }
  }

  removeMoveDecorateDot = () => {
    this.setState({
      classNameDecorateDot: ""
    });
  };

  handleAddNameNavItem = e => {
    this.setState({
      nameNavItem: e.target.innerHTML
    });
  };

  handleRemoveNameNavItem = () => {
    this.setState({
      nameNavItem: ""
    });
  };

  render() {
    const menu = this.pagesList.map((page, i) => {
      return (
        <NavLink to={page.path} key={i} className="navigation__link">
          <li
            className={`navigation__item navigation__item--${page.name}`}
            onClick={this.props.handleNav}
            onMouseOver={this.handleAddNameNavItem}
            onMouseOut={() => {
              this.handleRemoveNameNavItem();
              this.removeMoveDecorateDot();
            }}
          >
            {page.name}
          </li>
        </NavLink>
      );
    });

    return (
      <header className="head">
        <NavLink to="/" exact style={{ textDecoration: "none" }}>
          <h2 className="head__title">time for training</h2>
        </NavLink>

        <nav className="menu">
          <button
            className={
              this.props.navActive ? "hamburger hamburger--active" : "hamburger"
            }
            onClick={this.props.handleNav}
          >
            <span className="hamburger__box">
              <span className="hamburger__inner"></span>
            </span>
          </button>

          <div
            className={
              this.props.navActive
                ? "navigation"
                : "navigation navigation--close"
            }
          >
            <div
              className={
                this.state.classNameDecorateDot !== ""
                  ? `navigation__decorate-dot ${this.state.classNameDecorateDot}`
                  : "navigation__decorate-dot"
              }
            ></div>

            <ul className="navigation__item-list">{menu}</ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
