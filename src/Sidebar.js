import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__info">
            <h2>Clever Programmer</h2>
            <h3>
              <FiberManualRecordIcon />
              Caesar hinlo
            </h3>
          </div>
          <CreateIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
