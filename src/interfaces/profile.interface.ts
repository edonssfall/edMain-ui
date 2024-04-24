export interface IUserState {
  id: number;
  first_name: string;
  email: string;
  last_name: string;
  avatar: string;
}

export interface IProfileState {
  isLogged: boolean;
  user: IUserState | undefined;
  logIn: (email?: string, password?: string) => Promise<boolean>;
  logOut: () => Promise<boolean>;
}
