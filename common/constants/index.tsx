
export enum PageRoutes {
    LOGIN="/login",
    REGISTER="/register",
    HOME="/",
    ADMIN="/admin"
}

export const dropdownItems = [
    { eventKey: 'login', label: 'Login', route:PageRoutes.LOGIN},
    { eventKey: 'register', label: 'Register' , route:PageRoutes.REGISTER},
  ];

export  type User={
    id:number;
    email:string;
    full_name:string;
    password:string;
   }