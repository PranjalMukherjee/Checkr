import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Divider,
} from "@mui/material";
import theme from "../../../theme/Theme";
import TypographyAtom from "../../atoms/Typography";
import styled from "@emotion/styled";
import CustomChip from "../../atoms/chip";
import { CourtSearchesType } from "../../utils/types";
import { CourtSearches } from "../../../constants";
import { retrieveCourtSearchesDataById } from "../../../services/courtSearches/getCourtSearchesById";
import { useParams } from "react-router-dom";


const TableWrapper = styled(Box)`
  width: 100%;
  height: 338px;
  flex-shrink: 0;
  border-radius: 6px;
  background-color: ${theme.palette.structural.white};
  border-color: ${theme.palette.textColor.white};
  border: 4px solid #f5f5f5;
`;

const Header = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 60px;
  box-shadow: 0px 4px 28px 0px rgba(45, 45, 47, 0.1);
  background-color: ${theme.palette.textColor.white};
`;

const Title = styled(Box)`
  width: 3000px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const TableHeader = styled(TableCell)`
  padding: 12px;
  background-color: ${theme.palette.primaryColor[100]};
  border-color: ${theme.palette.structural.stroke};
`;

const Chip = styled(CustomChip)`
  font-weight: ${theme.typography.caption3.fontWeight};
  line-height: ${theme.typography.caption3.lineHeight};
  font-size: ${theme.typography.caption3.fontSize};
  font-family: ${theme.typography.fontFamily};
`;
const StyledTableCell = styled(TableCell)`
width: 680px;
`;

const CourtSearchesTable = () => {
  const { candidateId } = useParams();

  const [courtSearchesData, setCourtSearchesData] = useState<
    CourtSearchesType | undefined
  >(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await retrieveCourtSearchesDataById(candidateId!);

      setCourtSearchesData(response);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <TableWrapper data-testid="datatable">
      <Header>
        <Title data-testid="typography-test">
          <TypographyAtom
            variant="subtitle1"
            label={CourtSearches.tableHeader}
            color="theme.palette.textColor.highemp"
            
          />
        </Title>
      </Header>
      <Divider />
      <TableContainer
        sx={{ boxShadow: "0px 4px 28px 0px rgba(45, 45, 47, 0.10)" }}
        component={Paper}
      >
        <Table>
          <TableHead
            data-testid="tableheadertest"
            sx={{ backgroundColor: theme.palette.primaryColor[100] }}
          >
            <TableRow>
            
             
             
              <TableCell >
                <TypographyAtom
                  variant="caption"
                  label="SEARCH"
                  color={`${theme.palette.textColor.medemp}`}
                />
              </TableCell>
              <TableCell  >
                <TypographyAtom
                  variant="caption"
                  label="STATUS"
                  color={`${theme.palette.textColor.medemp}`}
                />
              </TableCell>
              <StyledTableCell  >
                <TypographyAtom
                  variant="caption"
                  label="DATE"
                  color={`${theme.palette.textColor.medemp}`}
                />
              </StyledTableCell>
           
            </TableRow>
          </TableHead>
          {courtSearchesData && (
            <TableBody data-testid="tablebodytest">
              <TableRow>
                <TableCell>
                  <TypographyAtom
                    variant="body1"
                    label="SSN Verification"
                    color={`${theme.palette.primaryColor[500]}`}
                    data-testid="tablevaluetest"
                  />
                </TableCell>
                <TableCell>
                  {courtSearchesData.ssnVerification.toUpperCase() ===
                  "CLEAR" ? (
                    <Chip
                      label={courtSearchesData.ssnVerification.toUpperCase()}
                      backgroundColor={theme.palette.accentColor.lightgreen}
                      color={theme.palette.accentColor.green}
                    />
                  ) : (
                    <Chip
                      label={courtSearchesData.ssnVerification}
                      backgroundColor={theme.palette.accentColor.lightyellow}
                      color={theme.palette.accentColor.yellow}
                    />
                  )}
                </TableCell>
                <StyledTableCell>{courtSearchesData.ssnverificationDate}</StyledTableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyAtom
                    variant="body1"
                    label="Sex Offender"
                    color={`${theme.palette.primaryColor[500]}`}
                  />
                </TableCell>
                <TableCell>
                  {courtSearchesData.sexOffender.toUpperCase() === "CLEAR" ? (
                    <Chip
                      label={courtSearchesData.sexOffender}
                      backgroundColor={theme.palette.accentColor.lightgreen}
                      color={theme.palette.accentColor.green}
                    />
                  ) : (
                    <Chip
                      label={courtSearchesData.sexOffender}
                      backgroundColor={theme.palette.accentColor.lightyellow}
                      color={theme.palette.accentColor.yellow}
                    />
                  )}
                </TableCell>
                <StyledTableCell>{courtSearchesData.sexOffenderDate}</StyledTableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <TypographyAtom
                 variant="body1"
                  label="Global Watchlist"
                  color={`${theme.palette.primaryColor[500]}`}
                />
              </TableCell>
                <TableCell>
                  {courtSearchesData.globalWatchlist.toUpperCase() ===
                  "CLEAR" ? (
                    <Chip
                      label={courtSearchesData.globalWatchlist}
                      backgroundColor={theme.palette.accentColor.lightgreen}
                      color={theme.palette.accentColor.green}
                    />
                  ) : (
                    <Chip
                      label={courtSearchesData.globalWatchlist}
                      backgroundColor={theme.palette.accentColor.lightyellow}
                      color={theme.palette.accentColor.yellow}
                    />
                  )}
                </TableCell>
                <StyledTableCell>{courtSearchesData.globalWatchlistDate}</StyledTableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <TypographyAtom
                  variant="body1"
                  label="Federal Criminal"
                  color={`${theme.palette.primaryColor[500]}`}
                />
              </TableCell>
                <TableCell>
                  {courtSearchesData.federalCriminal.toUpperCase() ===
                  "CLEAR" ? (
                    <Chip
                      label={courtSearchesData.federalCriminal}
                      backgroundColor={theme.palette.accentColor.lightgreen}
                      color={theme.palette.accentColor.green}
                    />
                  ) : (
                    <Chip
                      label={courtSearchesData.federalCriminal}
                      backgroundColor={theme.palette.accentColor.lightyellow}
                      color={theme.palette.accentColor.yellow}
                    />
                  )}
                </TableCell>
                <StyledTableCell>{courtSearchesData.federalCriminalDate}</StyledTableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <TypographyAtom
                  variant="body1"
                  label="County Criminal"
                  color={`${theme.palette.primaryColor[500]}`}
                />
              </TableCell>
                <TableCell>
                  {courtSearchesData.countyCriminal.toUpperCase() ===
                  "CLEAR" ? (
                    <Chip
                      label={courtSearchesData.countyCriminal}
                      backgroundColor={theme.palette.accentColor.lightgreen}
                      color={theme.palette.accentColor.green}
                    />
                  ) : (
                    <Chip
                      label={courtSearchesData.countyCriminal}
                      backgroundColor={theme.palette.accentColor.lightyellow}
                      color={theme.palette.accentColor.yellow}
                    />
                  )}
                </TableCell>

                
                
                <StyledTableCell>{courtSearchesData.countyCriminalDate}</StyledTableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default CourtSearchesTable;