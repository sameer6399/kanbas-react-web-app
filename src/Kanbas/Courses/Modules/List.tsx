import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    //const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
    let count = 0;
    return (
        <>
            <div className="p-2">
                <input className="form-control m-2" value={module.name}
                    onChange={(e) => dispatch(setModule({
                        ...module, name: e.target.value
                    }))}
                />
                <textarea className="form-control m-2" value={module.description}
                    onChange={(e) => dispatch(setModule({
                        ...module, description: e.target.value
                    }))}
                />
                <button className="btn btn-primary m-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))} >Add</button>
                <button className="btn btn-secondary m-2" onClick={() => dispatch(updateModule(module))}> Update </button>
                <ul className="list-group wd-modules">
                    {moduleList
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index}
                                className="list-group-item"
                                onClick={() => setSelectedModule(module)}>
                                <div style={{ padding: "15px" }}>
                                    <FaEllipsisV className="me-2" />
                                    <b>WEEK {count = count + 1} - {module.name}</b>
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" />
                                        <FaPlusCircle className="ms-2" />

                                        <button className="btn btn-warning m-1" onClick={() => dispatch(setModule(module))}> Edit </button>
                                        <button className="btn btn-danger m-1"
                                            onClick={() => dispatch(deleteModule(module._id))}>
                                            Delete
                                        </button>

                                        <FaEllipsisV className="ms-2" />
                                    </span>
                                </div>
                                {selectedModule._id === module._id && (
                                    <ul className="list-group">
                                        {module.lessons?.map((lesson: any) => (
                                            <li className="list-group-item" key={index} style={{ paddingLeft: "11px", paddingRight: "15px" }}>
                                                <FaEllipsisV className="me-2" />
                                                <a style={{ marginLeft: "50px" }}>{lesson.name}</a>
                                                <span className="float-end">
                                                    <FaCheckCircle className="text-success" />
                                                    <FaEllipsisV className="ms-2" />
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}
export default ModuleList;