import API from "../index";


export const retrieveAdverseActionData = async () => {
  const response = await API.get(`/action/`);
  return response.data;
};
