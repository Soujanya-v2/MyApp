import { UserType } from "./user.interface";
export interface LoggedInType {
  loggedIn: boolean;
  user?: UserType;
  loading: boolean;
  errors?: boolean;
  siteTourEnabled: boolean;
  logOutTriggered: boolean;
  token?: string;
  email:string;
  password:string;
  
 
}
