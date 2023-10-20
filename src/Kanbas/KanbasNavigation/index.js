import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../KanbasNavigation/kb.css"
import "../../vendors/fontawesome/css/all.css"
import "../../vendors/bootstrap/css/bootstrap.min.css"

function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Commons", "Help"];
  const icons = ["fa fa-user", "fas fa-chart-bar", "fas fa-book", "far fa-calendar", "fas fa-inbox", "fas fa-history", "fa fa-tv", "fa fa-share-square", "fa fa-question-circle"]


  return (
    <nav id="sidebar" className="col-12 col-md-6 col-xl-3 d-md-block d-none sidebar">
      <div className="list-group">
        <img src="/nu.png" alt="..." />
        {links.map((link, index) => (
          <Link
            key={index}
            to={index === 2 ? `/Kanbas/Courses/CS4550/Home` : `/Kanbas/${link}`}
            className={`list-group-item sidebar-link ${pathname.includes(link) && "active"}`}
          >
            <i className={icons[index]}></i>
            {link}
          </Link>
        ))}

      </div>
    </nav>
  );
}

export default KanbasNavigation;

