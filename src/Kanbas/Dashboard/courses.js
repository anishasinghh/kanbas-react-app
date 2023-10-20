import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css"
import "../../vendors/fontawesome/css/all.css"
import "../../vendors/bootstrap/css/bootstrap.min.css"
import React from "react";

function Dashboard() {
    const courses = db.courses;
    const whiteTextColor = { color: "white" };
    return (
        <div>
            <div class="col-md-12">
                <h2 class="dashboard-title">Dashboard<hr /></h2>

                <h4 class="dashboard-subtitle">Published Courses <hr /></h4>


            </div>
            <div class="main-content">
                
                <div style={{ marginLeft: 90 }} class="row d-flex flex-row flex-wrap">
                    {courses.map((course) => (
                        <div key={course._id} className="col-6 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 course-card">
                            <div style={{paddingRight: 100}}className="top-half">
                                <div className="ellipsis-icon-container">
                                    <i style={{color: "white", fontSize: 17}}className="fas fa-ellipsis-v"></i>
                                </div>
                            </div>
                            <div style={{paddingRight: 100, marginBottom: 35}} className="bottom-half">
                                <Link to={`/Kanbas/Courses/${course._id}`} className="card-link">
                                    {course.name}
                                </Link>
                                <p className="card-text">{course.number}</p>
                                <i style={{ color: "grey" }} className="fa fa-pen-square"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;