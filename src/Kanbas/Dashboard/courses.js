import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css"
import "../../vendors/fontawesome/css/all.css"
import "../../vendors/bootstrap/css/bootstrap.min.css"
import { React, useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {

    return (
        <div>
            <div class="col-md-12">
                <h2 class="dashboard-title">Dashboard<hr /></h2>
                <h4 class="dashboard-subtitle">Published Courses <hr /></h4>
            </div>


            <div style={{ marginLeft: 90 }} class="main-content">
                <h5>Course</h5>
                <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                <button className = "btn btn-success" style={{margin: 10}} onClick={addNewCourse} >
                    Add
                </button>
                <button className = "btn btn-primary" onClick={updateCourse}>
                    Update
                </button>

                <div className="list-group" style={{marginTop: 20}}>
                    {courses.map((course) => (
                        <Link key={course._id}
                            to={`/Kanbas/Courses/${course._id}`}
                            className="list-group-item">
                            {course.name}
                           
                            <button className="float-end btn btn-danger" style={{marginLeft: 10}}
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                }}>
                                Delete
                            </button>

                            <button className="float-end btn btn-warning"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                                Edit
                            </button>

                           

                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;