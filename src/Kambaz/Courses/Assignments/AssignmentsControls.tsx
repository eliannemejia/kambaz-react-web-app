import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";

export default function AssignmentsControls() {
    const { cid } = useParams();

    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-elipses">
                <IoEllipsisVertical className="fs-4" />
            </Button>
            <Link to={`/Kambaz/Courses/${cid}/Assignments/new`}>
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment" >
                    <FaPlus className="position-relative me-2" />
                    Assignment
                </Button>
            </Link>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
                <FaPlus className="position-relative me-2" />
                Group
            </Button>
            <InputGroup className="me-1 float-left" style={{ width: 300 }}>
                <InputGroup.Text>
                    <RxMagnifyingGlass />
                </InputGroup.Text>
                <FormControl
                    type="text"
                    className="form-control-lg"
                    placeholder="Search for Assignments"
                    id="wd-search-assignment"
                />
            </InputGroup>
        </div>
    );
}