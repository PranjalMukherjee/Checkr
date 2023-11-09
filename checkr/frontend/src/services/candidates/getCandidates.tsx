import API from "../index";


export const retrieveCandidatesData = async (
  page: number,
  itemsPerPage: number
) => {
  const candidateResponse = await API.get(
    `/candidates/report?offset=${
      (page - 1) * itemsPerPage
    }&limit=${itemsPerPage}`
  );
  return candidateResponse.data;
};
