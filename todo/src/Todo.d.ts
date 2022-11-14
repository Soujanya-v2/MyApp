interface IFormData{
    taskName:string;
  };

  interface TodoTaskProps{
    task:IFormData;
    deleteTask(taskDelete:string): void;
   };