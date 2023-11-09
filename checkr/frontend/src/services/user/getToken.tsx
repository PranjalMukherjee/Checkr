import { Token } from "../../components/utils/types";
import API from "../index";

export const getToken = async (data:Token) => {
    const response = await API.post(`/user/token`, data);
    return response.data;
  };

