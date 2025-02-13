import { Link, useLocation, useParams } from "react-router-dom";
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
    );
}
