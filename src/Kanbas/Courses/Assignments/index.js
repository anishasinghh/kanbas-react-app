import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";

function Assignments() {
    const { courseId } = useParams();
    const courseAssignments = useSelector((state) => state.assignmentsReducer.assignments.filter(
         (assignment) => assignment.course === courseId));
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    
    // const assignments = db.assignments;
    // const courseAssignments = assignments.filter(
    //   (assignment) => assignment.course === courseId);
    return (
      <div>
        <div style={{ width: 900, marginLeft: 0 }} className="row">
          <div className="list-group">
            <li className="list-group-item">
              <div className="row">
                <div className="col">
                <input value={assignment.title}
                  onChange={(e) => setAssignment({
                    ...assignment, title: e.target.value
                  })}
                />
                </div>
              </div>
              <button className="btn btn-success"
              onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>
              Add
            </button>
            <button className="btn btn-primary"
              onClick={() => dispatch(updateAssignment(assignment))}>
              Update
            </button>
            </li>

          </div>

        </div>
        <h2>Assignments for course {courseId}</h2>
        <div className="list-group col-8">
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item module-heading">
                 <i class="fa fa-ellipsis-v float-end"></i>
                            <i class="fa fa-check-circle float-end"></i>
              {assignment.title}
              <button className="btn btn-danger float-end" style={{ marginLeft: 10 }}
                  onClick={() => dispatch(deleteAssignment(assignment._id))}>
                  Delete
                </button>
                <button className="btn btn-warning float-end"
                  onClick={() => dispatch(setAssignment(assignment))}>
                  Edit
                </button>
            </Link>
            
          ))}
        </div>
      </div>
    );
  }
  export default Assignments;