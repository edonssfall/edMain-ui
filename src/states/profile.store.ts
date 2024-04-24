import {
  deleteTokens,
  setTokens,
} from "../utils/helpers/tokens";
import { IProfileState } from "../interfaces/profile.interface";
import { environment } from "../environments/environment";
import axiosInstance from "../utils/axios.instance";
import { AxiosResponse } from "axios";
import { create } from "zustand";

export const useProfileStore = create<IProfileState>()((set) => ({
  user: undefined,
  isLogged: false,
  logIn: async (
    email: string | undefined,
    password: string | undefined
  ): Promise<boolean> => {
    if (email && password) {
      const res: AxiosResponse<any> = await axiosInstance.post(
        environment.api.login,
        {
          email,
          password,
        }
      );
      if (res && res.status === 200) {
        const response = res.data;
        set((_) => ({ user: response.user }));
        localStorage.setItem(environment.user, JSON.stringify(response.user));
        setTokens(response.access_token, response.refresh_token);
        set((_) => ({ isLogged: true }));
      }
    }
    return this.isLogged;
  },
  logOut: async () => {
    const res = await axiosInstance.post(environment.api.logout);
    if (res.status === 200) {
      deleteTokens();
      set((_) => ({ user: undefined }));
      set((_) => ({ isLogged: false }));
      return true;
    }
    return false;
  },
}));
