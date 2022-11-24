import * as React from "react";
import { Routes, Route } from "react-router-dom";
import TodoTask from "./Components/TodoTask";
import TodoB from "./Components/TodoB";



const Main = () => {
  return (
    <Routes>
      {/* <Route path='/' element= { <Home />}/> */}
      <Route path="/" element={<TodoTask />} />
      <Route path="/todob" element={<TodoB />} />
   
    </Routes>
  );
};
export default Main;
