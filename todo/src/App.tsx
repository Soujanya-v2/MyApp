import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { currentUserSelector } from "./store/currentUser/userSlice";
import { Navigate,  Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Welcome from "./Components/Welcome";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import UserList from "./Components/UserList";
import LoginLayout from "./Components/LoginLayout";
import Navbar from "./Components/Navbar";
import TodoTask from "./Components/TodoTask";
import TodoTaskForm from "./Components/TodoTaskForm";
import { useLocation } from "react-router-dom";
import NotFound from "./Components/NotFound";

function App() {
  const { loggedIn } = useSelector(currentUserSelector);
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {!loggedIn ? (
          <Route path="" element={<Navbar />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="header" element={<Header />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        ) : (
          <Route path="/" element={<LoginLayout />}>
            <Route path="addTask" element={<TodoTaskForm />} />
            <Route path="addUser" element={<TodoTask />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="users" element={<UserList />} />
            {location.pathname === "/login" ? (
              <Route path="login" element={<Navigate to="/" replace />} />
            ) : (
              <Route path="*" element={<NotFound />} />
            )}
          </Route>
        )}
      </Routes>
    </>
  );
}
export default App;
