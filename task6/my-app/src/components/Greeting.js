import React, { useState } from "react";
import "./Greeting.css";

function Greeting({ name, initialMessage = "Welcome to React!", newMessage = "Hope you're enjoying learning React! 🚀" }) {
  const [message, setMessage] = useState(initialMessage);

 
  const toggleMessage = () => {
    setMessage(prevMessage => prevMessage === initialMessage ? newMessage : initialMessage);
  };

  return (
    <div className="greeting-container">
      <h1>Hello, {name}!</h1>
      <p>{message}</p>
      <button onClick={toggleMessage} aria-label="Click to toggle message">Change Message</button>
    </div>
  );
}

export default Greeting;
