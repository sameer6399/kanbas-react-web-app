import { FaArrowDown, FaBars } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

function FloatingNav() {

    const courseId = useParams();

    return (
        <>
            <div style={{ position: 'relative', zIndex: 3 }}>
                <div style={{ float: 'left' }} className="d-flex">
                    <div>
                        <button className="btn btn-dark" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseWidthExample" aria-expanded="true"
                            aria-controls="collapseWidthExample">
                                <FaBars style={{ color: '#b52828' }}/>
                        </button>
                    </div>
                </div>
                <div className="collapse collapse-horizontal" id="collapseWidthExample"
                    style={{ position: 'fixed', zIndex: 2 }}>
                    <div className="card card-body p-2" style={{ width: '100vw', height: '100vh', border: 'none' }}>
                        <li>
                            <img src="/images/canvas2.png" className="card-img-top" style={{ height: '150px', width: '150px' }} />
                            <button className="btn btn-secondary" style={{ float: 'right' }} type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseWidthExample" aria-expanded="false"
                                aria-controls="collapseWidthExample">
                                X
                            </button>
                        </li>
                        <li>
                            <a href="/Kanbas/Account/Profile/screen.html"
                                style={{ color: '#b52828', fontSize: '20px', textDecoration: 'none' }}><i className="fa fa-user-o"
                                    style={{ paddingRight: '20px' }}></i>Account
                            </a>
                        </li>
                    </div>
                </div>
            </div>

            <span style={{ position: 'relative', textAlign: 'center', color: 'white', zIndex: 1 }}>CS5610.MERGED.202430
                <p style={{ marginBottom: '0' }}></p>
            </span>

            <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ float: 'left' }} className="d-flex">
                    <div>
                        <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                            aria-controls="offcanvasTop"><FaArrowDown style={{ color: '#b52828' }}/></button>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-top" id="offcanvasTop" aria-labelledby="offcanvasTopLabel"
                style={{ height: 'fit-content' }}>
                <div className="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Navigate</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <li>
                        <Link to="/Kanbas/Courses/Home/screen.html"
                            style={{ color: '#b52828', fontSize: '20px', textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Modules</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Piazza</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Zoom Meetings</a>
                    </li>
                    <li>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                            style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Assignments</Link>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Quizes</a>
                    </li>
                    <li>
                        <Link to="/Kanbas/Courses/Grades/screen.html"
                            style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Grades</Link>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>People</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Panapto Video</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Discussions</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Announcements</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Pages</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Files</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Rubrics</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Outcomes</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Collaborations</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Syllabus</a>
                    </li>
                    <li>
                        <a href="#" style={{color: "#b52828", fontSize: "20px", textDecoration: "none"}}>Settings</a>
                    </li>
                </div>
            </div>
        </>

    );
}

export default FloatingNav;
