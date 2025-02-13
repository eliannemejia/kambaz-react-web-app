import { Link, useLocation, useParams } from "react-router-dom";
import * as db from "../Database";
import { ListGroup } from "react-bootstrap";

export default function CourseNavigation() {
    const { pathname } = useLocation();
    const { cid } = useParams();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (

        <ListGroup id="wd-courses-navigation" style={{ width: 130 }} 
        className="wd fs-5 rounded-0">
            {links.map((label) => {
                const path = `/Kambaz/Courses/${cid}/${label}`;
                return (
                    <ListGroup.Item key={label} as={Link} to={path} id={`wd-course-${label.toLowerCase()}-link`}
                    className={`border border-0 ${pathname.includes(label) ? "active" : "text-danger"}`}>
                        {label}
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
        // <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        //     <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        //         className="list-group-item active border border-0">Home</Link>
        //     <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        //         className="list-group-item text-danger border border-0">Modules
        //     </Link>
        //     <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        //         className="list-group-item text-danger border border-0">Piazza</Link>
        //     <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        //         className="list-group-item text-danger border border-0">Zoom</Link>
        //     <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        //         className="list-group-item text-danger border border-0">Assignments</Link>
        //     <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        //         className="list-group-item text-danger border border-0">Quizzes</Link>
        //     <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link"
        //         className="list-group-item text-danger border border-0">Grades</Link>
        //     <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        //         className="list-group-item text-danger border border-0">People</Link>
        // </div>
    );
}
