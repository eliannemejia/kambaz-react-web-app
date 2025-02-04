import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
    return (
        <div className="d-flex w-100" id="wd-home">
            <div className="me-3 w-100">
                <Modules />
            </div>
            <div className="d-none d-xl-block">
                <CourseStatus />
            </div>
        </div>

    );
}
