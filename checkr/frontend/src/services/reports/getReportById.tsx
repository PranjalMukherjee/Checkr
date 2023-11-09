import API from "../index";


export const retriveReportById = async (candidateId: string) => {
  const reportResponse = await API.get(`/reports/${candidateId}`);
  return reportResponse.data;
};
