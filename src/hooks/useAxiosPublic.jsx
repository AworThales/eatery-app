import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const axiosPublic = axios.create({
  baseURL: `${API}`,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
