import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenu: true
        };

        this.displayMenu.bind(this);
        this.closeMenu.bind(this);
    }

    displayMenu = () => {
        this.setState({ isMenu: false });
    };
    closeMenu = () => {
        this.setState({ isMenu: true });
    };

    render() {
        const isMenu = this.state.isMenu;
        let button;
        if (isMenu) {
            button = (
                <div>
                    <button className="nav-open" onClick={this.displayMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <Menu />
                </div>
            );
        } else {
            button = (
                <button className="nav-close" onClick={this.closeMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            );
        }
        return (
            <div className="bars" style={{ backgroundColor: "#1f271b" }}>
                {isMenu}
            </div>
        );
    }
}

export default NavBar;
