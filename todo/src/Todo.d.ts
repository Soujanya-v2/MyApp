import { Dispatch, SetStateAction } from "react";

interface IFormData {
  taskName: string;
  id: number;
  date: Date;
}

interface TodoTaskProps {
  task: IFormData;
  id: number;
  date: Date;
  deleteTask(taskDelete: number): void;
}

interface TodoProps {
  todoList: IFormData[];
  setTodoList: Dispatch<SetStateAction<IFormData[]>>;
}
