import { FaPlus } from "react-icons/fa";

function TopButtons() {
    return (
        <>
            <div className="d-flex justify-content-end p-1">
                <button className="btn btn-outline-secondary btn-sm me-2" type="button">Collapse All</button>
                <button className="btn btn-outline-secondary btn-sm me-2" type="button">View Progress</button>
                <select className="form-select me-2" style={{ width: "auto" }}>
                    <option>Publish All</option>
                    <option>Unpublish All</option>
                </select>
                <button className="btn btn-danger btn-sm" type="button"><FaPlus style={{marginBottom:"3px"}}/>
                    <span style={{paddingLeft: "5px"}}>Modules</span></button>
            </div>
            <hr />
        </>
    );
}

export default TopButtons;