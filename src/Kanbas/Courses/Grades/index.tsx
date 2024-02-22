import { FaFileExport, FaFileImport, FaFilter, FaScrewdriver } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="p-2" style={{ flexGrow: "1" }}>


            <div className="d-flex justify-content-end p-1">
                <button className="btn btn-outline-secondary me-2" type="button"><FaFileImport style={{marginRight:"10px", marginBottom:"3px"}}/>Import</button>
                <button className="btn btn-outline-secondary me-2" type="button"><FaFileExport style={{marginRight:"10px", marginBottom:"3px"}}/> Export</button>
                <button className="btn btn-success btn-sm" type="button"><FaScrewdriver/> </button>
            </div>

            <div className="row p-2">
                <div className="col-6">
                    <span><b>Student Names</b></span><br />
                    <input className="form-control" style={{marginRight: "40px"}} type="text"
                        placeholder="🔍 Search Students " />
                </div>

                <div className="col-6">
                    <span><b>Assignment Names</b></span><br />
                    <input className="form-control" style={{marginRight: "40px"}} type="text"
                        placeholder="🔍 Search Assignments" />
                </div>
            </div>

            <div className="p-2">
                <button className="btn btn-secondary" style={{width: "200px", marginRight: "40px"}} type="button"><FaFilter style={{marginRight:"10px"}}/>Apply Filters</button>
            </div>


            <div className="table-responsive p-2">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr style={{ textAlign: "center" }}>
                            <th style={{ textAlign: "left", padding: "15px", width: "200px" }}>Student Name</th>
                            {as.map((assignment) => (<th style={{ width: "150px" }}>{assignment.title}</th>))}
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td style={{ textAlign: "left", padding: "15px", color: "#b52828" }} >{user?.firstName} {user?.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>);
}
export default Grades;