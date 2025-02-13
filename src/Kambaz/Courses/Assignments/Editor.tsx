import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignments = db.assignments;
    const submissionTypes = ["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Upload"];
    return (
        <Container fluid id="wd-assignments-editor" className="w-100">
            <label htmlFor="wd-name">Assignment Name</label>
            {assignments
                .filter((assignment: any) => assignment._id === aid)
                .map((assignment: any) => (
                    <div key={assignment._id}>
                        <Form.Control className="wd-margin-bottom" placeholder="Assignment Name" id="wd-name" value={assignment.title} />
                        <FormControl as="textarea" className="wd-margin-bottom" id="wd-description" rows={5}
                            value={assignment.description} />
                        <Form.Group as={Row} className="mb-3 wd-padded-left" controlId="wd-points">
                            <Form.Label column sm={2} className="text-end">
                                Points
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" value={assignment.points} />
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
                                    {submissionTypes
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
                                    <Form.Control type="date" id="wd-due-date" value={assignment.dueDate} />
                                    <InputGroup.Text>
                                        <FaRegCalendarAlt />
                                    </InputGroup.Text>
                                </InputGroup>
                                <Form.Group as={Row} className="mb-3 text-nowrap align-items-top mb-3">
                                    <Col sm={6}>
                                        <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
                                        <InputGroup className="me-1 float-left">
                                            <Form.Control type="date" id="wd-available-from" value={assignment.availableFrom} />
                                            <InputGroup.Text>
                                                <FaRegCalendarAlt />
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
                                        <InputGroup className="me-1 float-left">
                                            <Form.Control type="date" id="wd-available-until" value={assignment.availableUntil} />
                                            <InputGroup.Text>
                                                <FaRegCalendarAlt />
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Form.Group>
                    </div>
                ))}
            <hr />
            <div className="d-flex justify-content-end">
                <Button variant="secondary">Cancel</Button>
                <Button variant="danger">Save</Button>
            </div>
        </Container>
    );
}