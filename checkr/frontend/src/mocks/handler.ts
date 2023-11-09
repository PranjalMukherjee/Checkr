import { rest } from "msw";
import data from "../../db.json";
import { BASE_URl_BACKEND } from "../constants";
import { candidatesInfoData } from "../components/utils/data";
export const handlers = [
  rest.get(`${BASE_URl_BACKEND}/candidates/report`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(candidatesInfoData));
  }),
  rest.get(`${BASE_URl_BACKEND}/action/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.adverseActionData));
  }),

  rest.get(`${BASE_URl_BACKEND}/searches/:candidateId`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.courtSearches[0]));

  }),
  rest.get(`${BASE_URl_BACKEND}/candidates/:candidateId`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.candidates[0]));
  }),
  rest.get(`${BASE_URl_BACKEND}/reports/:candidateId`, (req, res, ctx) => {
    return res(ctx.status(200),ctx.json(data.reports[0]));
  }),
  rest.patch(`${BASE_URl_BACKEND}/reports/:candidateId`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${BASE_URl_BACKEND}/user/token`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${BASE_URl_BACKEND}/user/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${BASE_URl_BACKEND}/user/signIn/token`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];