import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import "./index.css"
import Home from "./Home"
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";


function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const pathParts = pathname.split("/").filter(Boolean);
  const firstPathPart = pathParts[pathParts.length - 1];
  return (
    <div>
      <div style={{ marginLeft: 100, marginTop: 20 }} aria-label="breadcrumb">
        <div className="breadcrumb">
          <i class="fas fa-bars fa-lg menu-icon d-md-block d-none"></i>
          <li class="breadcrumb-item d-md-block d-none"> {course._id} </li>
          <li class="breadcrumb-item d-md-block d-none">{firstPathPart}</li>
        </div>
        <hr />
      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "75px",
          }}
        >
          <div className="col-12 col-md-8 col-xl-6 d-block d-sm-block" style={{ marginLeft: "5%" }}>
            <button type="button" className="btn bg-danger float-end top-buttons d-md-block d-none">
              <i className="fas fa-plus"></i> Module
            </button>
            <div className="dropdown">
              <button className="btn button-grey dropdown-toggle float-end top-buttons d-md-block d-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Publish All
              </button>
              <ul className="dropdown-menu"></ul>
            </div>
            <button type="button" className="btn button-grey float-end top-buttons d-md-block d-none">
              View Progress
            </button>
            <button type="button" className="btn button-grey float-end top-buttons d-md-block d-none">
              Collapse All
            </button>
          </div>
          <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
        <div className="col-12 col-md-8 col-xl-7 d-block d-sm-block" style={{ marginLeft: "5%" }}>
        </div>
      </div>
    </div>
  );
}
export default Courses;