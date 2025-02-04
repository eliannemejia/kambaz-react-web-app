import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentControlButtons() {
    return (
        <div className="justify-content-end">
            <GreenCheckmark />
            <BsPlus className="fs-4" style={{ bottom: "2px" }}/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}