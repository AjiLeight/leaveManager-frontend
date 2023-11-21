import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LeaveContextProvider } from "./store/leave-context.jsx";
import { UserContextProvider } from "./store/user-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <LeaveContextProvider>
      <App />
    </LeaveContextProvider>
  </UserContextProvider>
);
