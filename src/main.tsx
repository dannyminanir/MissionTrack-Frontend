
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
    <ThemeProvider>
    <AuthProvider>
      <App />
      </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  
);
