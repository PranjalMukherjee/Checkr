import { Token } from "../../components/utils/types";
import API from "../index";

export const postUser = async (data:Token) => {
    const response = await API.post(`/user/`, data);
    return response.data;
  };

