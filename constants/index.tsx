
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