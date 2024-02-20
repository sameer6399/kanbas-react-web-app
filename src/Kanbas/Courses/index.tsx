import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Breadcrumb from "./Breadcrumb";
function Courses() {
    return (
        <div>
            <h1><Breadcrumb /></h1>

            <div className="d-flex p-2">
                <div className="d-none d-md-flex">
                    <CourseNavigation />
                </div>
                
                <div style={{flexGrow:"1"}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<h1>Home</h1>} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>

            </div>

        </div>
    );
}

export default Courses;