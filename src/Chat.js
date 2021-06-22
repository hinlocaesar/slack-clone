import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

export default function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#GeneralTemp</strong>
          </h4>
          <StarBorderOutlinedIcon />
        </div>
        <div className="chat__headerRight">
          <InfoOutlinedIcon />
          Details
        </div>
      </div>
    </div>
  );
}
