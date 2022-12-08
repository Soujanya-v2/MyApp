import * as React from "react";
import { Routes, Route } from "react-router-dom";
import TodoTask from "./Components/TodoTask";
import TodoB from "./Components/TodoB";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";


const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoTask  />} />
      <Route path="/todob" element={<TodoB />} />
      <Route path="/loginpage" element={<LoginPage />}/>
   
    </Routes>
  );
};
export default Main;
