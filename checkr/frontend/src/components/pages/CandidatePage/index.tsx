import React, { useEffect, useState } from "react";

import CandidateTemplate from "../../templates/CandidateTemplate";

import DataTable from "../../organisms/CandidateTable";
import HeaderCard from "../../molecules/cards/headerCard";
import Sidebar from "../../molecules/Sidebar";
import { Modal } from "@mui/material";
import { ExportCandidateCVCard } from "../../organisms/ExportCard";
import ExportReportCard from "../../molecules/cards/exportReportCard";
import { useAuth0 } from "@auth0/auth0-react";
import { getToken } from "../../../services/user/getToken";
import { Token } from "../../utils/types";
import { TokenGen } from "../../utils/functions";
import { useNavigate } from "react-router-dom";

const CandidatePage = () => {
  const navigate = useNavigate();

  const [exportCardStatus, setExportCardStatus] = useState<boolean>(false);
  const [downloadLinkStatus, setDownloadLinkStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const handleExportClick = () => {
    setExportCardStatus(false);
    setDownloadLinkStatus(true);
    setTimeout(() => {
      setDownloadLinkStatus(false);
    }, 2000);
  };
  const handleClose = () => {
    setExportCardStatus(false);
  };
  const { user, isAuthenticated } = useAuth0();

  const fetchUser = async (requestData: Token) => {
    try {
      const response = await getToken(requestData);
      localStorage.setItem("token", response);
      const token = localStorage.getItem("token");
      TokenGen(`${token}`);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    if (isAuthenticated && user) {
      const email = user.email;
      const requestData: Token = {
        email: email,
        password: "password",
      };
      fetchUser(requestData);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <CandidateTemplate
      sidebar={<Sidebar highlight="candidates" />}
      header={
        <HeaderCard
          onClickExport={() => {
            setExportCardStatus(true);
          }}
        />
      }
      content={
        error ? (
          <div>Error...</div>
        ) : loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <DataTable isCandidateFilter={true} />
            {exportCardStatus && (
              <Modal
                open={exportCardStatus}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  marginTop: "12%",
                }}
              >
                <ExportCandidateCVCard onExportClick={handleExportClick} />
              </Modal>
            )}
            {downloadLinkStatus && <ExportReportCard />}
          </>
        )
      }
    />
  );
};

export default CandidatePage;