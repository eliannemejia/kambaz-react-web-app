import { Button, Col, Container, Form, Row } from "react-bootstrap";
import QuestionHeader from "./QuestionHeader";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import { useState } from "react";
import TrueOrFalseEditor from "./TrueOrFalseEditor";
import FillInTheBlankEditor from "./FillIntheBlankEditor";

export default function QuestionEditor() {
    const [questionType, setQuestionType] = useState("MULTIPLE CHOICE");
    return (
        <Container fluid id="wd-questions-editor">
            <Form.Group as={Row}>
                <Col md={4}>
                    <Form.Control type="text" className="wd-margin-bottom" placeholder="Question Name" id="wd-question-name" value="Easy Question" />
                </Col>
                <Col md={5}>
                    <Form.Select
                        value={questionType}
                        onChange={(e) => setQuestionType(e.target.value)}>
                        <option value="MULTIPLE CHOICE">Multiple Choice</option>
                        <option value="TRUE OR FALSE">True or False</option>
                        <option value="FILL IN THE BLANK">Fill in the Blank</option>
                    </Form.Select>
                </Col>
                <Col md={2} className="ms-auto">
                    <Form.Group as={Row} >
                        <Form.Label column sm={2} className="text-end">
                            <b>pts:</b>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" className="wd-margin-bottom" placeholder="0" id="wd-question-points" value="4" />
                        </Col>
                    </Form.Group>
                </Col>
            </Form.Group>
            <QuestionHeader />
            <br />
            {questionType === "MULTIPLE CHOICE" && <MultipleChoiceEditor />}
            {questionType === "TRUE OR FALSE" && <TrueOrFalseEditor />}
            {questionType === "FILL IN THE BLANK" && <FillInTheBlankEditor />}
            {/*<MultipleChoiceEditor />*/}
            <div className="d-flex justify-content-left">
                <Button variant="secondary" className="wd-margin-right">Cancel</Button>
                <Button variant="danger">Update Question</Button>
            </div>

        </Container>
    );
}