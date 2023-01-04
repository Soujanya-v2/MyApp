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
  editEmail: string;
  editFirstName: string;

}
interface TitleProps{
  title: string;
  task?:IFormData;
  editTask?(taskId: number, task:IFormData):void;
  open:boolean;
  setOpen:Dispatch<SetStateAction<boolean>>;
  addTask?(task:IFormData,):void;
  sno?:number;
}
interface IUserProps{
setOpen:Dispatch<SetStateAction<boolean>>;
addUser?(user:UserListProps):void;
updateUser?(user:UserListProps):void;
updatedUser?:UserListProps | null;
keyValue?:string;
open:boolean;
}