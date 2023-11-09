import API from "../index";


export const retrieveCandidateById = async (candidateId: string) => {
  const response = await API.get(`/candidates/${candidateId}`);
  return response.data;
};
