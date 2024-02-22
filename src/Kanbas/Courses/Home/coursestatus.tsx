import React from "react";
import { FaBan, FaBell, FaBullhorn, FaCalendar, FaChartLine, FaFileImport, FaHome, FaStream, FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";


function CourseStatus() {
    const buttonData = [
        { text: "Import Existing Content", icon: FaFileImport },
        { text: "View Course Stream", icon: FaStream },
        { text: "New Announcements", icon: FaBullhorn },
        { text: "Choose Home Page", icon: FaHome },
        { text: "New Analytics", icon: FaChartLine },
        { text: "View Course Notifications", icon: FaBell }
    ];

    const dateList = [
        { text: "Lecture", date: "CS4550 Sep 7 at 11:45am" },
        { text: "Lecture", date: "CS5610 Sep 11 at 6:00pm" },
        { text: "Lecture", date: "CS4550 Sep 11 at 11:45am" }
    ];

    return (
        <>
            <div className="d-flex d-none d-xl-flex col-lg-3 order-lg-last p-2"
                style={{ justifyContent: "center", width: "350px", marginTop: "5px"}}>
                <div className="me-2">
                    <div>
                        <h3>Course Status</h3>

                        <hr />

                        <div className="d-flex flex-row" style={{ justifyContent: "space-around" }}>
                            <div className="flex-column">
                                <button className="btn btn-outline-secondary mb-3" type="button"><FaBan style={{ marginBottom: "2px" }} /><span style={{ marginLeft: "5px" }}>Unpublish</span>
                                </button>
                            </div>
                            <div className="flex-column">
                                <button className="btn btn-outline-success mb-3" type="button"><FaUserCheck style={{ marginBottom: "2px" }} />
                                    <span style={{ marginLeft: "5px" }}>Published</span></button>
                            </div>
                        </div>

                        <ul className="list-group" style={{ textAlign: "left" }}>
                            {buttonData.map((button, index) => (
                                <button key={index} className="btn btn-secondary mb-2" style={{ textAlign: "left" }}>
                                    {button.icon && <button.icon />}
                                    <span style={{ marginLeft: "5px" }}>{button.text}</span>
                                </button>
                            ))}
                        </ul>

                        <br />

                        <div className="d-flex flex-row" style={{ justifyContent: "space-between" }}>
                            <div className="flex-column">
                                <h3>Coming Up</h3>
                            </div>
                            <div className="flex-column"></div>
                            <div style={{ padding: "5px" }}><Link to="#"
                                style={{ textDecoration: "none", color: "#b52828", paddingLeft: "5px" }}>
                                View Calendar</Link>
                            </div>
                        </div>

                        <hr style={{ margin: "5px" }} />

                        <ul>
                            {dateList.map((item, index) => (
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div style={{ marginRight: "10px" }}>
                                        <FaCalendar />
                                    </div>
                                    <div style={{ marginRight: "10px" }}>
                                        <Link to="#" style={{ textDecoration: "none", color: "#b52828" }}>{item.text}
                                            <p style={{ color: "grey" }}>{item.date}</p>
                                        </Link>
                                    </div>
                                    <div>
                                        X
                                    </div>
                                </div>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseStatus;