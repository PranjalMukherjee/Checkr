import "@testing-library/jest-dom";
import { server } from "./mocks/server";

afterEach(() => {
    jest.clearAllMocks();
});


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers()) 
afterAll(() => server.close())