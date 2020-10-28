import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="nav">
            <a href="/#education">education</a>
            <a href="/#portfolio">portfolio</a>
            <a href="/#contact">contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
