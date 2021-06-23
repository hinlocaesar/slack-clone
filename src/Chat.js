import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import { ContactSupportOutlined } from "@material-ui/icons";

export default function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
    }
    /*
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setRoomMessages(messages);
      });*/
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
          </h4>
          <StarBorderOutlinedIcon />
        </div>
        <div className="chat__headerRight">
          <InfoOutlinedIcon />
          <p>Details</p>
        </div>
      </div>
      <div className="chat__messages">
        {/*roomMessages.map((message) => console.log)*/}
      </div>
    </div>
  );
}
