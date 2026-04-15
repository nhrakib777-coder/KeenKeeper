import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TimelineProvider } from "./context/TimelineProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimelineProvider>
      <App />
    </TimelineProvider>
  </React.StrictMode>
);