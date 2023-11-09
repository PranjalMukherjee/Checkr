import API from "../index";


export const retrieveCourtSearchesDataById = async (candidateId: string) => {
  const response = await API.get(`/searches/${candidateId}`);

  return response.data;
};
