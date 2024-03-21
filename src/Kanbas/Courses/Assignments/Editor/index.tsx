import react, { useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { addAssignment, setAssignment, updateAssignment } from "../assignmentsReducer";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    console.log(assignmentId)
    // const assignment = assignments.find(
    //     (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();


    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const existingIdCheck = assignmentList.find(assignment => assignment._id === assignmentId);

    console.log('exis', existingIdCheck)

    const handleSave = () => {
        if (existingIdCheck === undefined) {
            dispatch(addAssignment({ ...assignment, course: courseId, _id: assignmentId }))
            console.log("Actually saving assignment TBD in later assignments");
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        } else {
            dispatch(updateAssignment(assignment))
            console.log("Actually updating assignment TBD in later assignments");
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        }
    };

    useEffect(() => {
        if (existingIdCheck !== undefined) {
            dispatch(setAssignment(existingIdCheck));
            console.log('b')
        } else {
            console.log('a')
            dispatch(setAssignment([]));
        }
    }, [])

    return (
        <div style={{ flexGrow: "1" }} className="p-2">

            <div className="d-flex justify-content-end p-1">
                <button className="btn" type="button"><FaCheckCircle style={{ color: "green", marginRight: "5px", marginBottom: "5px" }} /><a
                    style={{ color: "green" }}><b>Published</b></a></button>
                <button className="btn btn-secondary" type="button"><FaEllipsisV /></button>
            </div>

            <hr style={{ margin: "3px" }}></hr>

            <div>
                <div className="row p-2">
                    <div className="col">
                        <p style={{ marginBottom: "5px" }}><b>Assignment Name</b></p>
                        <input value={assignment?.title}
                            onChange={(e) => dispatch(setAssignment({
                                ...assignment, title: e.target.value
                            }))}
                            className="form-control mb-2" />
                        <br />
                        <textarea className="form-control" cols={25}
                            onChange={(e) => dispatch(setAssignment({
                                ...assignment, description: e.target.value
                            }))}
                            rows={8}>This is the assignment description</textarea>
                        <br />

                    </div>
                </div>


                <div className="row p-3" style={{ justifyContent: "center" }}>
                    <div className="col-2">
                        <label htmlFor="points" style={{ float: "right" }}>Points</label>
                    </div>
                    <div className="col-5">
                        <input className="form-control" onChange={(e) => dispatch(setAssignment({
                            ...assignment, points: e.target.value
                        }))} id="points" type="text" value="100" />
                    </div>
                </div>
                <div className="row p-2" style={{ justifyContent: "center" }}>
                    <div className="col-2">
                        <label htmlFor="assignmentgroup" style={{ float: "right" }}>Assignment Group</label>
                    </div>
                    <div className="col-5">
                        <select className="form-select" id="assignmentgroup">
                            <option>ASSIGNMENTS</option>
                            <option>QUIZES</option>
                            <option>LABS</option>
                        </select>
                    </div>
                </div>
                <div className="row p-2" style={{ justifyContent: "center" }}>
                    <div className="col-2">
                        <label htmlFor="displaygrade" style={{ float: "right" }}>Display Grade as</label>
                    </div>
                    <div className="col-5">
                        <select className="form-select" id="displaygrade">
                            <option>Percentage</option>
                            <option>Letter</option>
                        </select>
                    </div>
                </div>
                <div className="row p-2" style={{ justifyContent: "center" }}>
                    <div className="col-2">
                        <label htmlFor="submissiontype" style={{ float: "right" }}>Submission Type</label>
                    </div>
                    <div className="col-5">
                        <select className="form-select" id="submissiontype">
                            <option>Online</option>
                            <option>Paper Based</option>
                        </select>
                    </div>
                </div>
                <div className="row p-2" style={{ justifyContent: "center" }}>
                    <div className="col-2">
                    </div>
                    <div className="col-5">
                        <label><input type="checkbox" className="form-checkbox" />
                            Do not count the submission towards the final grade</label>
                    </div>
                </div>
                <div className="row p-2" style={{ justifyContent: "center" }}>
                    <div className="col-2">
                        <label style={{ float: "right" }}>Assign</label>
                    </div>
                    <div className="col-5 ">
                        <div className="form-control p-4">
                            <label className="p-2" htmlFor="assignto"><b>Assign to</b></label>

                            <input className="form-control p-2" id="assignto" type="text" value="Everyone" />

                            <label className="p-2" htmlFor="due"><b>Due</b></label>
                            <input className="form-control p-2"
                                onChange={(e) => dispatch(setAssignment({
                                    ...assignment, dueDate: e.target.value
                                }))}
                                id="due" type="date" value="2021-01-01" />

                            <div className="row p-2" style={{ justifyContent: "center" }}>
                                <div className="col p-2">
                                    <label htmlFor="availfrom"><b>Available From</b></label> <br />
                                    <input className="form-control"
                                        onChange={(e) => dispatch(setAssignment({
                                            ...assignment, availableFromDate: e.target.value
                                        }))}
                                        id="availfrom" type="date" value="2021-01-01" />
                                </div>
                                <div className="col p-2">
                                    <label htmlFor="until"><b>Until</b></label>
                                    <input className="form-control"
                                        onChange={(e) => dispatch(setAssignment({
                                            ...assignment, availableUntilDate: e.target.value
                                        }))}
                                        id="until" type="date" value="2021-01-01" />
                                </div>
                            </div>

                        </div>
                        <button className="form-control btn btn-secondary">+ ADD</button>
                    </div>
                </div>
                <hr />

                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                    <div>
                        <label><input type="checkbox" className="form-checkbox" style={{ marginRight: "5px" }} />
                            Notify users that this content has changed</label>
                    </div>
                    <div>
                        <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                            Save
                        </button>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                            className="btn btn-danger float-end">
                            Cancel
                        </Link>
                    </div>
                </div>


            </div>


        </div >
    );
}
export default AssignmentEditor;