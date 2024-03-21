import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPencilAlt, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import Modal from 'react-bootstrap/Modal';
import "./index.css";
import {
    deleteAssignment,
    setAssignment,
} from "./assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { KanbasState } from "../../store";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    console.log(assignmentList)
    const assignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        console.log(assignment._id);
        dispatch(deleteAssignment(assignment._id));
        setShow(false);
    }

    // const assignmentList = assignments.filter(
    //     (assignment) => assignment.course === courseId);

    const createNewAssignment = () => {
        const newId = 'A10' + (assignmentList.length + 1);
        navigate(`/Kanbas/Courses/${courseId}/Assignments/${newId}`);
    }

    return (
        <div style={{ flexGrow: "1" }} className="p-2">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <input className="form-control" placeholder="Search For Assignment" type="text" />
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-secondary" type="button" style={{ marginRight: "10px" }}><FaPlus />Group</button>
                    <button className="btn btn-outline-danger" onClick={createNewAssignment} type="button" style={{ marginRight: "10px" }}><FaPlus />Assignment</button>
                    <button className="btn btn-secondary" style={{ padding: "10px" }} type="button"><FaEllipsisV /></button>
                </div>
            </div>

            <hr style={{ margin: "10px" }}></hr>

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <FaEllipsisV style={{ marginRight: "10px", marginTop: "5px" }} /> <FaCaretDown style={{ marginRight: "10px", marginTop: "5px" }} /><b>ASSIGNMENTS</b>
                            <button className="btn"></button>
                        </div>
                        <div>
                            <button className="btn btn-outline-secondary p-1 wd-button-border" type="button" style={{ marginRight: "10px" }}>40%
                                of Total</button>
                            <span className="float-end">
                                <FaCheckCircle className="text-success" style={{ marginRight: "10px" }} />
                                <FaPlusCircle style={{ marginRight: "10px" }} /><FaEllipsisV />
                            </span>
                        </div>
                    </div>

                    <ul className="list-group">
                        {assignmentList
                            .filter((assignment) => assignment.course === courseId)
                            .map((assignment) => (
                                <li className="list-group-item">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex justify-content-start">
                                            <div style={{ marginRight: "10px", marginTop: "5px" }}>
                                                <button className="btn"><FaEllipsisV className="me-2" /></button>
                                                <FaPencilAlt />
                                            </div>
                                            <div>
                                                <Link
                                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ textDecoration: "none", color: "black" }}><b>{assignment.title}</b></Link>
                                                <br /><Link to="#" style={{ textDecoration: "none", color: "red" }}>Multiple Modules</Link> |
                                                Not Available Yet
                                            </div>
                                        </div>
                                        <div>
                                            <span className="float-end">
                                                <button className="btn btn-danger m-1"
                                                    onClick={() => {dispatch(setAssignment(assignment)); handleShow()}}>
                                                    Delete
                                                </button>
                                                <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                                        </div>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Confirm Deletion</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Do you want to delete the assignment!</Modal.Body>
                                            <Modal.Footer>
                                                <button className="btn btn-secondary" onClick={handleClose}>
                                                    Close
                                                </button>
                                                <button className="btn btn-secondary" onClick={handleDelete}>
                                                    Save Changes
                                                </button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </li>)
                            )
                        }
                    </ul>

                </li>
            </ul>
        </div>
    );
}
export default Assignments;