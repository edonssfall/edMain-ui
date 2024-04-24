import {
  refreshToken,
  accessToken,
  setTokens,
  deleteTokens,
} from "./helpers/tokens";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { environment } from "../environments/environment";

const refresh_token_api = environment.api.refresh_token;
const backend_url = environment.BACKEND_AUTH_URL;
const logout = environment.api.logout;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: backend_url,
  headers: {
    Authorization: accessToken,
  },
});

const refreshTokenHandler = async (config: InternalAxiosRequestConfig) => {
  if (!accessToken) {
    if (refreshToken) {
      const response = await axios.post(`${backend_url}/${refresh_token_api}`, {
        refresh: refreshToken,
      });

      if (response.status === 200) {
        const accessToken = response.data.access;
        setTokens(accessToken, refreshToken);
        config.headers.Authorization = `Bearer ${accessToken}`;
      } else {
        await axios.post(`${backend_url}/${logout}`, {
          refresh: refreshToken,
        });

        if (response.status === 200) {
          deleteTokens();
        }
      }
    }
  }
  return config;
};

axiosInstance.interceptors.request.use(refreshTokenHandler);

export default axiosInstance;
