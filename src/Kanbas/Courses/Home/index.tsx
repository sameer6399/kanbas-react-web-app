import { Module } from "module";
import ModuleList from "../Modules/List";
import CourseStatus from "./coursestatus";
import Modules from "../Modules";

function Home() {
    return (
        <>
            <div style={{flexGrow: "1"}}>
                <Modules/>
            </div>
            <CourseStatus />
        </>
    );
}
export default Home;