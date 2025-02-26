import { Button, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function BlankAssignmentScreen({ assignmentTitle, setAssignmentTitle,
    assignmentDescription, setAssignmentDescription, dueDate, setDueDate, points, setPoints, availableFrom, setAvailableFrom, availableUntil, setAvailableUntil,
    addAssignment }:
    {
        assignmentTitle: string;
        setAssignmentTitle: (title: string) => void;
        addAssignment: () => void;
        assignmentDescription: string;
        setAssignmentDescription: (description: string) => void;
        dueDate: string;
        setDueDate: (dueDate: string) => void;
        points: number;
        setPoints: (points: number) => void;
        availableFrom: string;
        setAvailableFrom: (availableFrom: string) => void;
        availableUntil: string;
        setAvailableUntil: (availableUntil: string) => void;
    }) {
    const { cid } = useParams();
  
    return (
        <div>
            <Form.Control className="wd-margin-bottom" placeholder="Assignment Name" id="wd-name"
                defaultValue={assignmentTitle} onChange={(e) => setAssignmentTitle(e.target.value)} />
            <FormControl as="textarea" className="wd-margin-bottom" id="wd-description" rows={5}
                defaultValue={assignmentDescription} onChange={(e) => setAssignmentDescription(e.target.value)} />
            <Form.Group as={Row} className="mb-3 wd-padded-left" controlId="wd-points">
                <Form.Label column sm={2} className="text-end">
                    Points
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" defaultValue={points} onChange={(e) => setPoints(Number(e.target.value))} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 text-nowrap wd-padded-left" controlId="wd-group">
                <Form.Label column sm={2} className="text-end">
                    Assignment Group
                </Form.Label>
                <Col sm={10} >
                    <Form.Select className="form-wide">
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 text-nowrap wd-padded-left" controlId="wd-display-grade-as">
                <Form.Label column sm={2} className="text-end">
                    Display Grade As
                </Form.Label>
                <Col sm={10}>
                    <Form.Select>
                        <option selected value="PERCENTAGE">Percentage</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 text-nowrap wd-padded-left" controlId="wd-submission-type" style={{ marginLeft: "5px" }}>
                <Form.Label column sm={2} className="text-end" style={{ paddingRight: "20px" }}>
                    Submission Type
                </Form.Label>
                <Col sm={10} className="wd-thin-gray-borders wd-padding-all-around">
                    <Form.Select>
                        <option selected value="ONLINE">Online</option>
                    </Form.Select>
                    <Col className="wd-padded-top">
                        <Form.Check name="check-submission-type" id="wd-text-entry" label="Text Entry" />
                        <Form.Check name="check-submission-type" id="wd-website-url" label="Website URL" />
                        <Form.Check name="check-submission-type" id="wd-media-recordings" label="Media Recordings" />
                        <Form.Check name="check-submission-type" id="wd-student-annotation" label="Student Annotation" />
                        <Form.Check name="check-submission-type" id="wd-file-upload" label="File Upload" />
                    </Col>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 wd-padded-left" style={{ marginLeft: "5px" }}>
                <Form.Label column sm={2} className="text-end" style={{ paddingRight: "20px" }}>Assign</Form.Label>
                <Col sm={10} className="wd-thin-gray-borders wd-padding-all-around" >
                    <Form.Label htmlFor="wd-assign-to">
                        Assign To
                    </Form.Label>
                    <Form.Control id="wd-assign-to" value="Everyone" className="mb-3" />
                    <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                    <InputGroup className="me-1 float-left mb-3">
                        <Form.Control type="date" id="wd-due-date" 
                        defaultValue={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
                        <InputGroup.Text>
                            <FaRegCalendarAlt />
                        </InputGroup.Text>
                    </InputGroup>
                    <Form.Group as={Row} className="mb-3 text-nowrap align-items-top mb-3">
                        <Col sm={6}>
                            <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
                            <InputGroup className="me-1 float-left">
                                <Form.Control type="date" id="wd-available-from" 
                                defaultValue={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)}/>
                                <InputGroup.Text>
                                    <FaRegCalendarAlt />
                                </InputGroup.Text>
                            </InputGroup>
                        </Col>
                        <Col sm={6}>
                            <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
                            <InputGroup className="me-1 float-left">
                                <Form.Control type="date" id="wd-available-until" 
                                defaultValue={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)}/>
                                <InputGroup.Text>
                                    <FaRegCalendarAlt />
                                </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Form.Group>
                </Col>
            </Form.Group>
            <hr />
            <div className="d-flex justify-content-end">
                <Button variant="secondary" className="wd-margin-right">Cancel</Button>
                <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                    <Button variant="danger" onClick={addAssignment}>Save</Button>
                </Link>
            </div>
        </div>
    );
}