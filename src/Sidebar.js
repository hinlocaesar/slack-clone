import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__info">
            <h2>Slack Clone Hinlo</h2>
            <h3>
              <FiberManualRecordIcon />
              Caesar hinlo
            </h3>
          </div>
          <CreateIcon />
        </div>
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption title="YtChannel" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption title="YtChannel" />
        <hr />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />

        {/*Connect to db and list all the channel and render using the sidebar option*/}
      </div>
    </div>
  );
}

export default Sidebar;
