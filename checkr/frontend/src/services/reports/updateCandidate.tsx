import API from "../index";


export const updateCandidateAdjudication = async (
  candidateId: string,
  adjudication: string,
  status: string
) => {
  await API.patch(`/reports/${candidateId}`, {
    adjudication: adjudication,
    status: status
  });
};
