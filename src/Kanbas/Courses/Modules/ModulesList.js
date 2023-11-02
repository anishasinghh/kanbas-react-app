import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database"; // Import your database or data source
import "../../../vendors/fontawesome/css/all.css"
import "../../../vendors/bootstrap/css/bootstrap.min.css"
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ width: 900, marginLeft: 0 }} className="row">
        <div className="list-group">
          <li className="list-group-item" style={{ marginTop: 10, border: 0 }}>
            <div className="row">
              <div className="col">
                <input value={module.name}
                  onChange={(e) => setModule({
                    ...module, name: e.target.value
                  })}
                />
              </div>
            </div>
            <div className="row" style={{ marginTop: 10 }} >
              <div className="col">
                <textarea value={module.description}
                  onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                  }
                />
              </div>
            </div>
            <button className="btn btn-success"
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
            <button className="btn btn-primary"
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
          </li>
        </div>
        
        <hr style={{ color: "gray", borderLeft: 0, marginTop: 10 }} />
        <div style={{ marginTop: 0, marginLeft: 0 }} className="list-group module-group col">

          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <div key={index} className="module-heading list-group-item" >
                <h4>
                  <i className="fas fa-grip-vertical"></i> {module.name}
                  <i className="fa fa-ellipsis-v float-end"></i>
                  <i style={{ fontSize: "15px", paddingTop: "10px", paddingLeft: "10px" }} className="fa fa-plus float-end"></i>
                  <i className="fa fa-check-circle float-end"></i>
                </h4>
                <p>{module.description}</p>
                <button className="btn btn-danger float-end" style={{ marginLeft: 10 }}
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                <button className="btn btn-warning float-end"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
              </div>
            ))}

        </div>

      </div>
    </>
  );
}

export default ModuleList;
