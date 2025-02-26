import { Button, Col, Form, Row } from "react-bootstrap";
import { ImArrowRight } from "react-icons/im";

export default function TrueOrFalseEditor() {
    return (
        <div>
            <Form.Control as="textarea" rows={3} id="wd-question-description" placeholder="Insert Description" value="Does 2 + 2 = 4?" />
            <b>Answers:</b>
            <br />
            <Form.Group as={Row}>
                <Col className="wd-padded-left" style={{ marginLeft: "50px" }}>
                    <Button variant="light" className="border-0 bg-transparent text-success">
                        <ImArrowRight className="green-icon" />
                        <b>True</b></Button>
                </Col>
            </Form.Group>
            <Form.Group as={Row} style={{marginBottom: "10px"}}>
                <Col className="wd-padded-left" style={{ marginLeft: "60px" }}>
                    <Button variant="light" className="border-0 bg-transparent"><b>False</b></Button>
                </Col>
            </Form.Group>
        </div>
    );
}