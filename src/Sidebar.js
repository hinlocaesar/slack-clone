import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import db from "./firebase";

function Sidebar() {
  const [channels, setChannel] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannel(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

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
        <SidebarOption Icon={InsertCommentIcon} title="Mention and Reactions" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption title="YtChannel" />
        <hr />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />
        <SidebarOption Icon={InsertCommentIcon} title="Replace Later" />

        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

        {/*Connect to db and list all the channel and render using the sidebar option*/}
        {channels.map((channel) => (
          <SidebarOption title={channel.name} id={channel.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
