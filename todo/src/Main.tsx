import * as React from "react";
import { Routes, Route } from "react-router-dom";
import TodoTask from "./Components/TodoTask";
import TodoB from "./Components/TodoB";
import LoginPage from "./Components/LoginPage";
const Main = () => {
  return (
    <Routes>

      <Route path="/todob" element={<TodoB />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};
export default Main;
