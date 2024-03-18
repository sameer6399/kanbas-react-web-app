import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPencilAlt, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div style={{ flexGrow: "1" }} className="p-2">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <input className="form-control" placeholder="Search For Assignment" type="text" />
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-secondary" type="button" style={{marginRight:"10px"}}><FaPlus />Group</button>
                    <button className="btn btn-outline-danger" type="button" style={{marginRight:"10px"}}><FaPlus />Assignment</button>
                    <button className="btn btn-secondary" style={{ padding: "10px" }} type="button"><FaEllipsisV /></button>
                </div>
            </div>

            <hr style={{ margin: "10px" }}></hr>

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <FaEllipsisV style={{marginRight:"10px", marginTop:"5px"}}/> <FaCaretDown style={{marginRight:"10px", marginTop:"5px"}}/><b>ASSIGNMENTS</b>
                            <button className="btn"></button>
                        </div>
                        <div>
                            <button className="btn btn-outline-secondary p-1 wd-button-border" type="button" style={{marginRight:"10px"}}>40%
                                of Total</button>
                            <span className="float-end">
                                <FaCheckCircle className="text-success" style={{marginRight:"10px"}}/>
                                <FaPlusCircle style={{marginRight:"10px"}}/><FaEllipsisV />
                            </span>
                        </div>
                    </div>

                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex justify-content-start">
                                        <div style={{marginRight:"10px", marginTop:"5px"}}>
                                            <button className="btn"><FaEllipsisV className="me-2" /></button>
                                            <FaPencilAlt/>
                                        </div>
                                        <div>
                                            <Link
                                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{textDecoration:"none", color:"black"}}><b>{assignment.title}</b></Link>
                                                <br /><Link to="#" style={{textDecoration: "none", color:"red"}}>Multiple Modules</Link> |
                                                    Not Available Yet
                                        </div>
                                    </div>
                                    <div>
                                    <span className="float-end">
                                            <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                                    </div>
                                </div>
                            </li>))
                        }
                    </ul>

                </li>
            </ul>
        </div>
    );
}
export default Assignments;