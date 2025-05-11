import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());

  let emoji = "";
  let greeting = "";
  let hours = new Date().getHours();

  if (hours < 12) {
    emoji = "☀️";
    greeting = "Good Morning!";
  } else if (hours > 12) {
    emoji = "☀️";
    greeting = "Good Afternoon!";
  } else {
    emoji = "🌙";
    greeting = "Good Evening!";
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card text-center shadow p-4">
        <h1 className="display-4 mb-3">
          <span className="emoji-bounce">{emoji}</span>
          {greeting}
        </h1>
        <p className="lead text-muted currenttime">
          Current Time: {currentTime}
        </p>
      </div>
    </div>
  );
}

export default App;
