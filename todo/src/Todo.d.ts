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
  editTask(taskEditId: number, task: IFormData): void;
}

interface TodoProps {
  todoList: IFormData[];
  setTodoList: Dispatch<SetStateAction<IFormData[]>>;
}

interface UserProps{
   email:string;
   password:string;
}
interface UserListProps{
  avatar:string;
  id:number;
  email:string;
  first_name:string;
  last_name:string;
}
