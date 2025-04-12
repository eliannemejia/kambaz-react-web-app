import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router";
import BlankAssignmentScreen from "./BlankAssignmentScreen";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
export default function AssignmentEditor() {
    const dispatch = useDispatch();
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const assignment = assignments.find((a: any) => a._id === aid);
    const submissionTypes = ["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Upload"];
    const { pathname } = useLocation();
    const [assignmentTitle, setAssignmentTitle] = useState(assignment?.title || "");
    const [assignmentDescription, setAssignmentDescription] = useState(assignment?.description || "");
    const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
    const [points, setPoints] = useState(assignment?.points || 0);
    const [availableFrom, setAvailableFrom] = useState(assignment?.availableFrom || "")
    const [availableUntil, setAvailableUntil] = useState(assignment?.availableUntil || "")
    const isNewAssignment = pathname.split("/")[5] === "new";
    const createAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = {
            title: assignmentTitle,
            description: assignmentDescription,
            dueDate: dueDate,
            points: points,
            availableFrom: availableFrom,
            availableUntil: availableUntil,
            assignTo: "Everyone",
            assignmentGroup: "ASSIGNMENTS",
            displayGradeAs: "PERCENTAGE",
            submissionType: "ONLINE",
            allowedSubmissions: [],
            course: cid,
        };
        const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(assignment));
    };

    const handleSave = async () => {
        if (!assignment) return;

        const updatedAssignment = {
            ...assignment,
            title: assignmentTitle,
            description: assignmentDescription,
            dueDate,
            points,
            availableFrom,
            availableUntil,
            assignTo: assignment.assignTo,
            assignmentGroup: assignment.assignmentGroup,
            displayGradeAs: assignment.displayGradeAs,
            submissionType: assignment.submissionType,
            allowedSubmissions: assignment.allowedSubmissions,
        };

        const saved = await assignmentsClient.updateAssignment(updatedAssignment);

        dispatch(updateAssignment(saved));
    };

    console.log("Cid:", cid);
    console.log("Aid:", aid);
    useEffect(() => {
        console.log("Updated Assignment Name:", assignmentTitle);
    }, [assignmentTitle]);

    console.log("All assignments:", assignments);
    console.log("Navigated Assignment ID:", aid);
    console.log("Found Assignment:", assignment);
    return (
        <Container fluid id="wd-assignments-editor" className="w-100">
            <label htmlFor="wd-name">Assignment Name</label>
            {isNewAssignment ? <BlankAssignmentScreen assignmentTitle={assignmentTitle} setAssignmentTitle={setAssignmentTitle}
                dueDate={dueDate} setDueDate={setDueDate} points={points} setPoints={setPoints} availableFrom={availableFrom}
                setAvailableFrom={setAvailableFrom} availableUntil={availableUntil}
                setAvailableUntil={setAvailableUntil}
                assignmentDescription={assignmentDescription} setAssignmentDescription={setAssignmentDescription}
                addAssignment={createAssignmentForCourse} /> : <div key={assignment._id}>
                <Form.Control className="wd-margin-bottom" placeholder="Assignment Name" id="wd-name" defaultValue={assignment.title}
                    onChange={(e) => setAssignmentTitle(e.target.value)} />
                <FormControl as="textarea" className="wd-margin-bottom" id="wd-description" rows={5}
                    defaultValue={assignment.description} onChange={(e) => setAssignmentDescription(e.target.value)} />
                <Form.Group as={Row} className="mb-3 wd-padded-left" controlId="wd-points">
                    <Form.Label column sm={2} className="text-end">
                        Points
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" defaultValue={assignment.points} onChange={(e) => setPoints(Number(e.target.value))} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 text-nowrap wd-padded-left" controlId="wd-group">
                    <Form.Label column sm={2} className="text-end">
                        Assignment Group
                    </Form.Label>
                    <Col sm={10} >
                        <Form.Select className="form-wide">
                            <option selected value="ASSIGNMENTS">{assignment.assignmentGroup}</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 text-nowrap wd-padded-left" controlId="wd-display-grade-as">
                    <Form.Label column sm={2} className="text-end">
                        Display Grade As
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select>
                            <option selected value="PERCENTAGE">{assignment.displayGradeAs}</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 text-nowrap wd-padded-left" controlId="wd-submission-type" style={{ marginLeft: "5px" }}>
                    <Form.Label column sm={2} className="text-end" style={{ paddingRight: "20px" }}>
                        Submission Type
                    </Form.Label>
                    <Col sm={10} className="wd-thin-gray-borders wd-padding-all-around">
                        <Form.Select>
                            <option selected value="ONLINE">{assignment.submissionType}</option>
                        </Form.Select>
                        <Col className="wd-padded-top">
                            {submissionTypes && submissionTypes
                                .map((submissionType: any) => {
                                    const allowedTypes = assignment.allowedSubmissions;
                                    console.log(allowedTypes);
                                    const isAllowed = allowedTypes.includes(submissionType);
                                    const id = submissionType.toLowerCase().replace(/\s+/g, "-");
                                    return (
                                        <Form.Check key={id} name="check-submission-type" id={`wd-${id}`} label={submissionType} checked={isAllowed} />
                                    )
                                })}
                        </Col>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 wd-padded-left" style={{ marginLeft: "5px" }}>
                    <Form.Label column sm={2} className="text-end" style={{ paddingRight: "20px" }}>Assign</Form.Label>
                    <Col sm={10} className="wd-thin-gray-borders wd-padding-all-around" >
                        <Form.Label htmlFor="wd-assign-to">
                            Assign To
                        </Form.Label>
                        <Form.Control id="wd-assign-to" value={assignment.assignTo} className="mb-3" />
                        <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                        <InputGroup className="me-1 float-left mb-3">
                            <Form.Control type="date" id="wd-due-date" defaultValue={assignment.dueDate} onChange={(e) => setDueDate(e.target.value)} />
                            <InputGroup.Text>
                                <FaRegCalendarAlt />
                            </InputGroup.Text>
                        </InputGroup>
                        <Form.Group as={Row} className="mb-3 text-nowrap align-items-top mb-3">
                            <Col sm={6}>
                                <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
                                <InputGroup className="me-1 float-left">
                                    <Form.Control type="date" id="wd-available-from" defaultValue={assignment.availableFrom}
                                        onChange={(e) => setAvailableFrom(e.target.value)} />
                                    <InputGroup.Text>
                                        <FaRegCalendarAlt />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Col>
                            <Col sm={6}>
                                <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
                                <InputGroup className="me-1 float-left">
                                    <Form.Control type="date" id="wd-available-until" defaultValue={assignment.availableUntil}
                                        onChange={(e) => setAvailableUntil(e.target.value)} />
                                    <InputGroup.Text>
                                        <FaRegCalendarAlt />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Col>
                        </Form.Group>
                    </Col>
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                        <Button variant="secondary" className="wd-margin-right">Cancel</Button>
                    </Link>
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                        <Button variant="danger" onClick={handleSave}>Save</Button>
                    </Link>

                </div>
            </div>
            }
            <hr />
        </Container>
    );
}