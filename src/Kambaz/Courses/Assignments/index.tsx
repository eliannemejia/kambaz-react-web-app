import { Container, ListGroup } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import AssignmentIcons from "./AssignmentIcons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsPlus } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
        <Container id="wd-assignments">
            <AssignmentsControls /><br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroup.Item className="wd-assignments-title p-0 mb-5 fs-5 border-gray" id="wd-assignments-title">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                        <IoMdArrowDropdown className="me-2 fs-3" /> Assignments
                        <div className="ms-auto">
                            <BsPlus className="fs-4" style={{ bottom: "2px" }} />
                        </div>
                    </div>
                    <ListGroup id="wd-assignment-assignment-list" className="rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <ListGroup.Item className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
                                    <AssignmentIcons />
                                    <div className="float-end wd-margin-left" >
                                        <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id} `}
                                            className="list-group-item border border-0">
                                            {assignment.title} <br />
                                            <span style={{ fontSize: "16px" }}>Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
                                        </Link>
                                    </div>
                                    <div className="ms-auto">
                                        <AssignmentControlButtons />
                                    </div>
                                </ListGroup.Item >))}
                    </ListGroup >
                    
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}
