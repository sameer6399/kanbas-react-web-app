import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaStudiovinari, FaCreativeCommons, FaQuestionCircle } from "react-icons/fa";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import './index.css';

function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2 text-white"/> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2"/> },
        { label: "Courses", icon: <FaBook className="fs-2"/> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2"/> },
        { label: "Inbox", icon: <FaInbox className="fs-2"/> },
        { label: "History", icon: <FaClock className="fs-2"/> },
        { label: "Studio", icon: <FaStudiovinari className="fs-2"/> },
        { label: "Commons", icon: <FaCreativeCommons className="fs-2"/> },
        { label: "Help", icon: <FaQuestionCircle className="fs-2"/> },
    ]
    const { pathname } = useLocation();

    return (
        <ul className="wd-kanbas-navigation" >
            
            <li><Link to="http://northeastern.edu" style={{fontSize: "xxx-large"}}>N</Link></li>
            {links.map((link, index) => (
                <li key={index} className={ pathname.includes(link.label) ? "wd-active" : ""} >
                    <Link to={`/Kanbas/${link.label}`}> <i>{link.icon}</i> <br/> {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}

export default KanbasNavigation;