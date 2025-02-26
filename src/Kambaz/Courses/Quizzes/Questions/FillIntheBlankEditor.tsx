import { Button, Col, Form, Row } from "react-bootstrap";
import { ImArrowRight } from "react-icons/im";
import QuestionIcons from "./QuestionIcons";

export default function FillInTheBlankEditor() {
    return (
        <div>
            <Form.Control as="textarea" rows={3} id="wd-question-description" placeholder="Insert Description" value="2 + 2 = ______?" />
            <div id="wd-possible-answers" style={{marginTop: "10px"}}>
                <b>Answers:</b>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3} className="text-end">Possible Answer</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" className="wd-margin-bottom" value="one"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={3} className="text-end">Possible Answer</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" className="wd-margin-bottom" value="two"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={3} className="text-end text-success"><ImArrowRight className="green-icon" /> Correct Answer</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" className="wd-margin-bottom" value="four"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 wd-thin-gray-borders-sharp wd-padded-top wd-margin-right">
                    <Form.Label column sm={3} className="text-end text-success"><ImArrowRight className="green-icon" style={{ opacity: 0.5 }} /> Correct Answer</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" className="wd-margin-bottom" value="seven"/>
                    </Col>
                    <Col className="ms-auto">
                        <QuestionIcons />
                    </Col>
                </Form.Group>
                <div className="ms-auto text-end">
                    <Button variant="light" className="bg-transparent border-0 text-danger"> + Add Another Answer</Button>
                </div>
            </div>
        </div>
    );
}