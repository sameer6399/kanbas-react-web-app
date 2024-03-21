import { Link } from "react-router-dom";
import * as db from "../Database";
import { useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {

    let image = "canvas.png";

    if (course.image !== undefined) {
        image = course.image;
    }

    // const [courses, setCourses] = useState(db.courses);
    // const [course, setCourse] = useState({
    //     _id: "0", name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    //     image: "/images/reactjs.jpg"
    // });
    // const addNewCourse = () => {
    //     const newCourse = {
    //         ...course,
    //         _id: new Date().getTime().toString()
    //     };
    //     setCourses([...courses, { ...course, ...newCourse }]);
    // };
    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };
    // const deleteCourse = (courseId: string) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />
            <br />
            <h5>Add New Course</h5>
            <hr />
            <input value={course.name} className="form-control m-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control m-2"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control m-2" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control m-2" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <button className="btn btn-primary m-2" onClick={addNewCourse} >
                Add
            </button>
            <button className="btn btn-primary m-2" onClick={updateCourse} >
                Update
            </button>

            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <hr className="wd-hrblock" />
            <div className="d-flex flex-row flex-wrap">
                {courses.map((course) => (
                    <div key={course._id} className="wd-adjust" style={{ width: 300 }}>
                        <div className="card">
                            <img src={`./images/${image}`} className="card-img-top"
                                style={{ height: 130 }} />
                            <div className="card-body">
                                <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    {course.name}
                                </Link>
                                <p className="card-text">{course.number}</p>
                                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary m-1">
                                    Go </Link>
                                <button className="btn btn-success m-1" onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                                    Edit
                                </button>
                                <button className="btn btn-danger m-1" onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;