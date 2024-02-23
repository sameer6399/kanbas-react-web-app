import { useParams, useLocation, Link } from "react-router-dom";
import { assignments, courses } from "../../Database";
import { HiBars3 } from "react-icons/hi2";
import "./index.css";
import { FaGlasses } from "react-icons/fa";

function Breadcrumb() {
    const { courseId } = useParams();
    const { pathname } = useLocation();

    let currentPath = pathname.split(/[\s/]+/).pop();
    const course = courses.find((course) => course._id === courseId);

    const assignmentsIndex = pathname.indexOf("Assignments");

    if (assignmentsIndex !== -1) {

        const pathAfterAssignments = pathname.substring(assignmentsIndex + "Assignments".length + 1);
        
        let name = "";
        const assignment = assignments.find(assignment => assignment._id === pathAfterAssignments);
        if (assignment) {
            name = assignment.title;
        }

        if (pathAfterAssignments) {
            currentPath = `Assignments > ${name}`;
        }
    }



    return (
        <>
            <div>
                <div className="d-flex flex-row p-2 justify-content-between d-md-flex d-none">
                    <div className="mx-4 d-flex">
                        <nav className="wd-breadcrumb" aria-label="breadcrumb">
                            <ol className="breadcrumb" style={{ margin: "5px" }}>
                                <HiBars3 style={{ color: "#b52828", fontSize: "35px" }} />
                                <li className="breadcrumb-item" style={{ marginTop: "5px" }}>
                                    <a style={{ color: "#b52828", marginLeft: "30px", textDecoration: "none" }}>CS5610.{course?.name}.202430</a>
                                </li>
                                <li className="breadcrumb-item active" style={{ color: "#2d3b45", fontWeight: "500", marginTop: "5px" }}
                                    aria-current="page">{currentPath}</li>
                            </ol>
                        </nav>
                    </div>
                    <div >
                        <button type="button" className="btn btn-outline-secondary btn-sm" style={{ width: "130px", marginBottom: "10px" }}>
                            <span style={{ padding: "5px" }}><FaGlasses /></span>
                            Student View
                        </button>
                    </div>

                </div>
                <hr style={{ margin: "0" }} />
            </div>
        </>
    );
}

export default Breadcrumb;