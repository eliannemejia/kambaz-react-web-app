import { Container, ListGroup } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import AssignmentIcons from "./AssignmentIcons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsPlus } from "react-icons/bs";

export default function Assignments() {
    return (
        <Container id="wd-assignments">
            <AssignmentsControls /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray" id="wd-assignments-title">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                        <IoMdArrowDropdown className="me-2 fs-3" /> Assignments
                        <div className="ms-auto">
                            <BsPlus className="fs-4" style={{ bottom: "2px" }} />
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                            <AssignmentIcons />
                            <div className="float-end wd-margin-left" >
                                <Link to="/Kambaz/Courses/1234/Assignments/123" id="wd-assignment-link"
                                    className="list-group-item border border-0">
                                    A1 - ENV + HTML<br />
                                    <span style={{ fontSize: "16px" }}>Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
                                </Link>
                            </div>
                            <div className="ms-auto">
                                <AssignmentControlButtons />
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                            <AssignmentIcons />
                            <div className="float-end wd-margin-left" >
                                <Link to="/Kambaz/Courses/1234/Assignments/123" id="wd-assignment-link"
                                    className="list-group-item border border-0">
                                    A2 - CSS + BOOTSTRAP<br />
                                    <span style={{ fontSize: "16px" }}> Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</span>
                                </Link>
                            </div>
                            <div className="ms-auto">
                                <AssignmentControlButtons />
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                            <AssignmentIcons />
                            <div className="float-end wd-margin-left" >
                                <Link to="/Kambaz/Courses/1234/Assignments/123" id="wd-assignment-link"
                                    className="list-group-item border border-0">
                                    A3 - JAVASCRIPT + REACT<br />
                                    <span style={{ fontSize: "16px" }}> Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</span>
                                </Link>
                            </div>
                            <div className="ms-auto">
                                <AssignmentControlButtons />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}
