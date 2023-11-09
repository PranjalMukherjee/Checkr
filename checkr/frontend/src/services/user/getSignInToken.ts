import { Token } from "../../components/utils/types";
import API from "../index";

export const getSignInToken = async (data:Token) => {
    const response = await API.post(`/user/signIn/token`, data);
    return response.data;
  };

