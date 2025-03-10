import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import CreateUrl from "./pages/CreateURL";
import ViewData from "./pages/ViewData";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/create-url" element={<CreateUrl />} />
          <Route path="/dashboard/view-data" element={<ViewData />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
