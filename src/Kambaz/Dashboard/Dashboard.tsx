import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function KambazDashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> <Card>
            <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/webDev.webp" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS4550 Web Development</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Web Development</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> <Card>
            <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/theoryComp.jpeg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS3800 Theory of Computationt</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Theory of Computation</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> <Card>
            <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/networks.jpeg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS4700 Network Fundamentals</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Network Fundamentals</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> <Card>
            <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/devPysch.png" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">PSYC3404 Devlopmental Psychology</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Devlopmental Psychology</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> <Card>
            <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/systems.jpeg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS3650 Computer Systems</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Computer Systems</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> <Card>
            <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/digitalDesign.jpeg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">EECE2322 Fundamentals of Digital Design and Computer Organization</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Fundamentals of Digital Design and Computer Organization</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> <Card>
            <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/algo.webp" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS3000 Algorithms and Data</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Algorithms and Data</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
          </Col>
        </Row>
      </div>
    </div>

  );
}
