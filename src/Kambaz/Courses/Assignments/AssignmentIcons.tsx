import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";

export default function AssignmentIcons() {
    return (
        <div className="float-end">
            <BsGripVertical className="me-2 fs-3" />
            <LuNotebookPen className="assignment-icon" />
        </div>
    );
}