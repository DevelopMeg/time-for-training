import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  pagesList = [
    { name: "training-list", path: "/training-list" },
    { name: "price-list", path: "/price-list" },
    { name: "trainers-info", path: "/trainers-info" }
  ];

  render() {
    const menu = this.pagesList.map((page, i) => {
      return (
        <NavLink to={page.path} key={i} className="navigation__link">
          <li className={`navigation__item navigation__item--${page.name}`}>
            {page.name}
          </li>
        </NavLink>
      );
    });

    return (
      <header className="head">
        <NavLink to="/" exact>
          <h2 className="head__title">time for training</h2>
        </NavLink>

        <nav className="menu">
          <button className="hamburger">
            <span className="hamburger__box">
              <span className="hamburger__inner"></span>
            </span>
          </button>

          <div className="navigation">
            <div className="navigation__decorate-dot"></div>
            <ul className="navigation__item-list">{menu}</ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
