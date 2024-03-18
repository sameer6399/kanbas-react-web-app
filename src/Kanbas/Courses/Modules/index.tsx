import ModuleList from "./List";
import TopButtons from "./topButtons";
function Modules() {
    return (
        <div style={{flexGrow:"1"}}>
            <TopButtons/>
            <ModuleList />
        </div>
    );
}
export default Modules;