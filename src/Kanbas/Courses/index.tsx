import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Breadcrumb from "./Navigation/breadcrumb";
import Home from "./Home";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    return (
        <div>
            <h1><Breadcrumb /></h1>

            <div className="d-flex p-2">
                <div className="d-none d-md-flex">
                    <CourseNavigation />
                </div>

                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                    <Route path="Grades" element={<Grades />} />
                </Routes>

            </div>

        </div>
    );
}

export default Courses;