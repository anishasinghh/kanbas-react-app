import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);
    return (
      <div>
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
            </Link>
          ))}
        </div>
      </div>
    );
  }
  export default Assignments;