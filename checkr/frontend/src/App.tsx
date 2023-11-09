import React from "react";

import theme from "./theme/Theme";
import { CandidateInfoPage } from "./components/pages/CandidateInfoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignInPage } from "./components/pages/SignInPage";
import { SignUpPage } from "./components/pages/SignUpPage";
import { ForgetPasswordPage } from "./components/pages/ForgetPasswordPage";
import CandidatePage from "./components/pages/CandidatePage";
import AdverseActionsPage from "./components/pages/AdverseActionPage";
import PreAdversePage from "./components/pages/PreAdversePage";
import { AuthenticationGuard } from "./components/auth";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "@mui/material";


const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <>
                  <AuthenticationGuard
                    component={CandidatePage}
                  ></AuthenticationGuard>
                </>
              ) : (
                <SignInPage />
              )
            }
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          <Route
            path="/candidates"
            element={<CandidatePage/>}
          />
          <Route
            path="/adverse-actions"
            element={<AdverseActionsPage/>}
          />
          <Route
            path="/preadverse/:candidateId"
            element={<PreAdversePage />}
          />
          <Route
            path="/candidateInfo/:candidateId"
            element={
              <CandidateInfoPage/>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
