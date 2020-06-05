import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

class Education extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Education</h1>
                <section className="education-center">
                    {/* single education */}
                    <article className="education">
                        <img src="/put.png" alt="PUT"></img>
                        <h1>MSc Automatic Control & Robotics</h1>
                        <div className="date">
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="icons"
                            />
                            <p>2015 - 2016</p>
                        </div>
                    </article>
                    {/* end of single education */}
                    {/* single education */}
                    <article className="education">
                        <img src="/Paris-Saclay.png" alt="PUT"></img>
                        <h1>MSc Smart Aerospace & Autonomous Systems</h1>
                        <div className="date">
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="icons"
                            />
                            <p>2015 - 2016</p>
                        </div>
                    </article>
                    {/* end of single education */}
                    {/* single education */}
                    <article className="education">
                        <img src="/uni-lodz.png" alt="PUT"></img>
                        <h1>
                            Postgraduate Studies in CCNA Routing & Switching
                        </h1>
                        <div className="date">
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="icons"
                            />
                            <p>2017 - 2018</p>
                        </div>
                    </article>
                    {/* end of single education */}
                </section>
            </div>
        );
    }
}

export default Education;
