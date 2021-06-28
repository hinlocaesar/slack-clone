import React, { UseState } from "react";
import "./ChatInput";
import db from "./firebase";

function chatInput({ channelName, channelId }) {
  const [input, setInput] = UseState("null");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
    }
  };

  return (
    <div className="chatInput">
      {" "}
      <form>
        value={input}
        onChange={(e) => setInput(e.target.value)}
        <input placeholder={`Message #${channelName?.toLowerCase()}`} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default chatInput;
