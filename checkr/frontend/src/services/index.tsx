import axios from "axios";
import { BASE_URl_BACKEND } from "../constants";


export default axios.create({
  baseURL: BASE_URl_BACKEND,
  headers: {
    "content-Type": "application/json",
  },
});

