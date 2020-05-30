import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Photo from "./Photo";

class Profile extends Component {
    render() {
        return (
            <div className="profile-center">
                <Photo></Photo>

                <div className="profile-detail">
                    <h1>ebonom n. mfam </h1>
                    <h4>web developer</h4>
                    <p>Web development enthusiast and football lover</p>
                    <a
                        href="https://www.linkedin.com/in/ebonom-n-mfam-870136101/"
                        className="social-icons"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a
                        href="https://github.com/ManuBoca92"
                        className="social-icons"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                </div>
            </div>
        );
    }
}

export default Profile;
