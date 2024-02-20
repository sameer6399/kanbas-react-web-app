import { Link } from "react-router-dom";
import { courses } from "../Database";

function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              
            <hr />
            <h2>Published Courses ({courses.length})</h2> 
            <hr className="wd-hrblock"/>
                <div className="d-flex flex-row flex-wrap">
                    {courses.map((course) => (
                        <div key={course._id} className="wd-adjust" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`./images/${course.image}`} className="card-img-top"
                                    style={{ height: 130 }} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name} </Link>
                                    <p className="card-text">{course.number}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}
export default Dashboard;