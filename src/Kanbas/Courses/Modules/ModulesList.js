import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database"; // Import your database or data source
import "./index.css"
import "../../../vendors/fontawesome/css/all.css"
import "../../../vendors/bootstrap/css/bootstrap.min.css"


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
 


  return (
    <>
      <div style={{ width: 900, marginLeft: 0 }} className="row">

        <hr style={{ color: "gray", borderLeft: 0, marginTop: 10 }} />
        <div style={{ marginTop: 0, marginLeft: 0 }} className="list-group module-group col">

          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <div key={index} className="module-heading list-group-item" >
                <h4>
                  <i  className="fas fa-grip-vertical"></i> {module.name}
                  <i className="fa fa-ellipsis-v float-end"></i>
                  <i style={{ fontSize: "15px", paddingTop: "10px", paddingLeft: "10px" }} className="fa fa-plus float-end"></i>
                  <i className="fa fa-check-circle float-end"></i>
                </h4>
                <p>{module.description}</p>

              </div>
            ))}

        </div>
       
      </div>
    </>
  );
}

export default ModuleList;
