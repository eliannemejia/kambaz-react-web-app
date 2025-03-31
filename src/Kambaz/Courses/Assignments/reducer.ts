import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
          },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: uuidv4(),
                title: assignment.title,
                description: assignment.description,
                dueDate: assignment.dueDate,
                points: assignment.points,
                availableFrom: assignment.availableFrom,
                allowedSubmissions:[],
                availableUntil: assignment.availableUntil,
                course: assignment.course,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
            console.log("Assignments after adding:", state.assignments);
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(assignment => assignment._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map(a => 
                a._id === assignment._id ? assignment : a);
        },
        setAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

