import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
    return (
        <Container fluid id="wd-assignments-editor" className="w-100">
            <label htmlFor="wd-name">Assignment Name</label>
            <Form.Control className="wd-margin-bottom" placeholder="Assignment Name" id="wd-name" value="A1 - ENV + HTML" />
            <FormControl as="textarea" className="wd-margin-bottom" id="wd-description" rows={5}
                value="The assignment is available online Submit a link to the landing page of" />
            <Form.Group as={Row} className="mb-3 wd-padded-left" controlId="wd-points">
                <Form.Label column sm={2} className="text-end">
                    Points
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" value={100} />
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
            <Form.Group as={Row} className="mb-3 text-nowrap wd-padded-left" controlId="wd-submission-type" style={{marginLeft:"5px"}}>
                <Form.Label column sm={2} className="text-end" style={{paddingRight:"20px"}}>
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
            <Form.Group as={Row} className="mb-3 wd-padded-left" style={{marginLeft:"5px"}}>
                <Form.Label column sm={2} className="text-end" style={{paddingRight:"20px"}}>Assign</Form.Label>
                <Col sm={10} className="wd-thin-gray-borders wd-padding-all-around" >
                    <Form.Label htmlFor="wd-assign-to">
                        Assign To
                    </Form.Label>
                    <Form.Control id="wd-assign-to" value="Everyone" className="mb-3" />
                    <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                    <InputGroup className="me-1 float-left mb-3">
                        <Form.Control type="date" id="wd-due-date" value="2024-05-13"/>
                        <InputGroup.Text>
                            <FaRegCalendarAlt />
                        </InputGroup.Text>
                    </InputGroup>
                    <Form.Group as={Row} className="mb-3 text-nowrap align-items-top mb-3">
                        <Col sm={6}>
                            <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
                            <InputGroup className="me-1 float-left">
                                <Form.Control type="date" id="wd-available-from" value="2024-05-06" />
                                <InputGroup.Text>
                                    <FaRegCalendarAlt />
                                </InputGroup.Text>
                            </InputGroup>
                        </Col>
                        <Col sm={6}>
                            <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
                            <InputGroup className="me-1 float-left">
                                <Form.Control type="date" id="wd-available-until" value="2024-05-20" />
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
                <Button variant="secondary">Cancel</Button>
                <Button variant="danger">Save</Button>
            </div>
        </Container>
    );
}