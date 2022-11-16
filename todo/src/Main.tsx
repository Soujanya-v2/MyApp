import * as React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./Components/TodoList";
import TodoB from "./Components/TodoB";

const Main = () => {
  return (
    <Routes>
      {/* <Route path='/' element= { <Home />}/> */}
      <Route path="/" element={<TodoList />} />
      <Route path="/todob" element={<TodoB />} />
    </Routes>
  );
};
export default Main;
