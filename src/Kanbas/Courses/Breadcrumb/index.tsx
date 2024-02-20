import { useParams } from "react-router-dom";
import { courses } from "../../../Kanbas/Database";
import { HiBars3 } from "react-icons/hi2";

function Breadcrumb() {
    const { courseId  } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <>
        <HiBars3/>
        Course {course?.name} 
        <hr/>
        </>
    );
}

export default Breadcrumb;