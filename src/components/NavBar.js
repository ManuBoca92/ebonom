import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenu: false
    };

    this.displayMenu.bind(this);
    this.closeMenu.bind(this);
  }

  displayMenu = () => {
    this.setState({ isMenu: true });
  };
  closeMenu = () => {
    this.setState({ isMenu: false });
  };

  render() {
    const isMenu = this.state.isMenu;
    return isMenu ? (
      <div className="bars" style={{ backgroundColor: "#1f271b" }}>
        <button className="nav-close" onClick={this.closeMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Menu />
      </div>
    ) : (
      <div className="bars" style={{ backgroundColor: "#1f271b" }}>
        <button className="nav-open" onClick={this.displayMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    );
  }
}

export default NavBar;
