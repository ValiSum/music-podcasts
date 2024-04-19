import axios from "axios";

const corsProxy = import.meta.env.VITE_CORS_PROXY;
const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  let queryString = "";
  const { baseURL = "", url = "", params } = config;

  if (params) {
    const queryParams = new URLSearchParams(params);
    queryString = queryParams.toString();
    config.params = {};
  }

  config.url = `${corsProxy}${encodeURIComponent(`${baseURL}${url}?${queryString}`)}`;

  return config;
});

export const get = axiosInstance.get;
export const post = axiosInstance.post;
export const put = axiosInstance.put;
export const remove = axiosInstance.delete;
export const patch = axiosInstance.patch;
export default axiosInstance;
