import { Dispatch, SetStateAction } from "react";

interface IFormData {
  taskName: string;
  description: string;
  id: number;
  date: Date;
}

interface TodoTaskProps {
  task: IFormData;
  description: string;
  id: number;
  date: Date;
  deleteTask(taskDelete: number): void;
  editTask( taskEditId: number,taskEditName:string,taskEditDescription:string): void;
}

interface TodoProps {
  todoList: IFormData[];
  setTodoList: Dispatch<SetStateAction<IFormData[]>>;
}
