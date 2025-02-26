import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import DeleteAssignment from "./DeleteAssignment";

export default function AssignmentControlButtons({ assignmentId, deleteAssignment }:
    {
        assignmentId: string;
        deleteAssignment: (moduleId: string) => void;
    }) {
    return (
        <div className="justify-content-end">
            <GreenCheckmark />
            <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog"
                style={{ marginLeft: "3px" }} />
            <BsPlus className="fs-4" style={{ bottom: "2px" }} />
            <IoEllipsisVertical className="fs-4" />
            <DeleteAssignment dialogTitle="Delete Assignment" assignmentId={assignmentId}
                deleteAssignment={deleteAssignment} />
        </div>
    );
}