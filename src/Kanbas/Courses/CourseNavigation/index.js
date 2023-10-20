import { Link, useParams, useLocation } from "react-router-dom";
import "./cn.css"
import "../../../vendors/fontawesome/css/all.css"
import "../../../vendors/bootstrap/css/bootstrap.min.css"

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Assignments", "Quizzes", "Grades", "People", "Dicussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div>
      <div className="list-group" style={{ width: 150, marginLeft: 90 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item links-link ${pathname.includes(link) && "active"}`}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CourseNavigation;
