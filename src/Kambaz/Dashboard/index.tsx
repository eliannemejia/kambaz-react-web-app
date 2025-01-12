import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/WebDevelopment/Home"
            className="wd-dashbaord-course-link">
            <img src="/images/webDev.webp" width={200} />
            <div>
              <h5>CS 4550 Web Development</h5>
              <p className="wd-dashboard-course-title">
                Web Development </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/TheoryofComputation/Home"
            className="wd-dashbaord-course-link">
            <img src="/images/theoryComp.jpeg" width={200} height={200} />
            <div>
              <h5>CS 3800 Theory of Computation</h5>
              <p className="wd-dashboard-course-title">
                Theory of Computation </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/NetworkFundamentals/Home"
            className="wd-dashbaord-course-link">
            <img src="/images/networks.jpeg" width={200} />
            <div>
              <h5>CS 4700 Network Fundamentals</h5>
              <p className="wd-dashboard-course-title">
                Network Fundamentals </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/DevelopmentalPsychology/Home"
            className="wd-dashbaord-course-link">
            <img src="/images/devPysch.png" width={200} />
            <div>
              <h5>PSYC 3404 Devlopmental Psychology</h5>
              <p className="wd-dashboard-course-title">
                Developmental Psychology </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/ComputerSystems/Home"
            className="wd-dashbaord-course-link">
            <img src="/images/systems.jpeg" width={200} />
            <div>
              <h5>CS 3650 Computer Systems</h5>
              <p className="wd-dashboard-course-title">
                Computer Systems </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/DigitalDesign/Home"
            className="wd-dashbaord-course-link">
            <img src="/images/digitalDesign.jpeg" width={200} />
            <div>
              <h5>EECE 2322 Fundamentals of Digital Design and Computer Organization</h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Digital Design and Computer Organization </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/AlgorithmsAndData/Home"
            className="wd-dashbaord-course-link">
            <img src="/images/algo.webp" width={200} />
            <div>
              <h5>CS 3000 Algorithms and Data</h5>
              <p className="wd-dashboard-course-title">
                Algorithms and Data </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


