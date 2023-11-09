import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Card,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  TableCell,
  TableCellProps,
  Theme,
  styled,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FilterIcon from "../../../../public/assests/images/Filter.svg";
import SearchIcon from "../../../../public/assests/images/search.svg";
import theme from "../../../theme/Theme";
import DotsButton from "../../../../public/assests/images/More.svg";
import TypographyAtom from "../../atoms/Typography";
import Icon from "../../atoms/icon";
import CustomChip from "../../atoms/chip";
import { DATA_TABLE } from "../../../constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Filter from "../FilterPopup";
import IconButton from "../../atoms/IconButton";
import TextInput from "../../atoms/Textfield";
import { Link, useNavigate } from "react-router-dom";
import { CandidateInfo } from "../../utils/types";
import { retrieveCandidatesData } from "../../../services/candidates/getCandidates";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { formatDate } from "../../utils/functions";

export interface TableProps {
  isCandidateFilter: boolean;
}

const DataTableWrapper = styled(Card)`
  width: 99.5%;
  border-radius: 6px;
  background-color: ${theme.palette.structural.white};
  border-color: ${theme.palette.textColor.white};
  line-height: 20px;
  margin-top: -2px;
`;

const HeaderWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 60px;
`;

const TitleWrapper = styled(Box)`
  width: 3000px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FilterWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 1800px;
  margin-left: 50px;
  gap: 10px;
  margin-top: 10px;
`;

const FilterButton = styled(IconButton)`
  margin-left: 10px;
  padding: 8px 16px 8px 16px;
  background-color: ${theme.palette.structural.white};
  border-color: ${theme.palette.structural.stroke};
  width: 90px;
  height: 36px;
  border-radius: 6px;
  margin-bottom: 7px;
  color: ${theme.palette.greyColor.icon01};
  &:hover {
    background-color: ${theme.palette.textColor.white};
    border-color: ${theme.palette.structural.stroke};
  }
  font-weight: ${theme.typography.body1.fontWeight};
  line-height: ${theme.typography.body1.lineHeight};
  font-size: ${theme.typography.body1.fontSize};
  font-family: ${theme.typography.fontFamily};
`;
const HeadButton = styled(IconButton)`
  &:hover {
    background-color: ${theme.palette.textColor.white};
  }
`;

const DotsIconButton = styled(IconButton)`
  background-color: ${theme.palette.structural.white};
  border-color: ${theme.palette.structural.stroke};
  width: 36px;
  height: 36px;
  border-radius: 6px;
  color: ${theme.palette.greyColor.icon01};
  margin-left: 10px;
  margin-bottom: 7px;
  &:hover {
    background-color: ${theme.palette.textColor.white};
    border-color: ${theme.palette.structural.stroke};
  }
`;

interface TableHeaderCellProps extends TableCellProps {
  columnName?: string;
}

const TableHeaderCell = styled(TableCell)<TableHeaderCellProps>`
  padding: 12px;
  background-color: ${theme.palette.primaryColor[100]};
  border-color: ${theme.palette.structural.stroke};
  padding-left: ${(props) =>
    props.columnName === "DATE"
      ? "2.5%"
      : props.columnName === "LOCATION"
      ? "0.5%"
      : "1%"};
`;

const TableRowCell = styled(TableCell)`
  padding: 12px 4px;
`;
const StyledChip = styled(CustomChip)`
  font-weight: ${theme.typography.caption3.fontWeight};
  line-height: ${theme.typography.caption3.lineHeight};
  font-size: ${theme.typography.caption3.fontSize};
  font-family: ${theme.typography.fontFamily};
`;

const customSelectStyles = (theme: Theme) => ({
  height: "26px",
  border: `0.8px solid ${theme.palette.structural.stroke}`,
  boxShadow: "none",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.structural.stroke} !important`,
  },
});

const customInputStyles = (theme: Theme) => ({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "18px",
  color: theme.palette.textColor.highemp,
});

const customMenuStyles = (theme: Theme) => ({
  "& li": {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "18px",
    color: theme.palette.textColor.highemp,
  },
});

const StyledPagination = styled(Pagination)({
  "& .Mui-selected, & .css-f2rzto-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
    {
      backgroundColor: theme.palette.primaryColor[300],
      color: theme.palette.primaryColor[500],
    },
});

const SearchFooterStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  height: "52px",
  paddingLeft: "8px",
  flexDirection: "row",
  gap: "6px",
});

const OuterFooterStack = styled(Stack)({
  height: "50px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px",
});

const InnerFooterSatck = styled(Stack)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  flexDirection: "row",
});

export default function DataTable(props: TableProps) {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string[]>([""]);
  const [allChecked, setAllChecked] = useState<boolean>(true);
  const [candidatesData, setCandidatesData] = useState<CandidateInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const [pages, setPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagesChange = (event: SelectChangeEvent<number>) => {
    setPages(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFilterStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAllChecked(false);
    setShowAll(false);
    if (e.target.checked) {
      if (value.toUpperCase() === "ALL") {
        setShowAll(true);
        setFilterStatus([""]);
        setAllChecked(true);
      } else {
        setFilterStatus([value.toUpperCase()]);
      }
    } else {
      setFilterStatus(filterStatus.filter((status) => status !== value));
    }
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleCloseFilter = () => {
    setOpenFilter(false);
    setFilterStatus([...filterStatus]);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await retrieveCandidatesData(currentPage, pages);
      setCandidatesData(response);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pages, currentPage]);

  const startIndex = 0;
  const endIndex = pages;

  const filteredData = showAll
    ? candidatesData
    : candidatesData.filter(
        (row) =>
          filterStatus.includes(row.report.status) || filterStatus.length === 0
      );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <DataTableWrapper data-testid="datatable">
      <HeaderWrapper>
        <TitleWrapper>
          <TypographyAtom
            variant="subtitle1"
            label={DATA_TABLE.tableHeader}
            color="theme.palette.textColor.highemp"
          />
        </TitleWrapper>
        {openFilter && (
          <Filter
            handleClose={handleCloseFilter}
            isCandidatesFilter={props.isCandidateFilter}
            handleFilterStatusChange={handleFilterStatusChange}
            filterStatus={filterStatus}
            data-testid="filter-popup"
            ischecked={allChecked}
          />
        )}
        <FilterWrapper data-testid="header-test">
          <TextInput
            bgcolor={theme.palette.structural.white}
            bcolor={theme.palette.structural.stroke}
            border="1px solid"
            width="344px"
            height="36px"
            bradius="6px"
            placeholder={DATA_TABLE.searchPlaceholder}
            value={searchValue}
            onChange={handleOnChange}
            startAdornment={
              <InputAdornment position="start">
                <Icon src={SearchIcon} />
              </InputAdornment>
            }
            data-testid="searchtest"
          />
          <FilterButton
            variant="outlined"
            icon={FilterIcon}
            text="Filter"
            onClick={handleOpenFilter}
            data-testid="filter-button"
          />
          <DotsIconButton
            variant="outlined"
            text={<Icon src={DotsButton} alt="DotsButton" />}
          />
        </FilterWrapper>
      </HeaderWrapper>
      <Divider data-testid="typography-test" />
      <TableContainer component={Paper} sx={{ overflow: "hidden" }}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              {DATA_TABLE.columnsData.map((column) => (
                <TableHeaderCell columnName={column.name} key={column.id}>
                  <TypographyAtom
                    label={column.name}
                    variant="caption3"
                    color={`${theme.palette.textColor.medemp}`}
                  />
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody data-testid="tablebodytest">
            {filteredData
              .filter((row) =>
                row.candidates.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .slice(startIndex, endIndex)
              .map((row) => (
                <TableRow key={row.candidates.id}>
                  <TableRowCell>
                    <HeadButton
                      onClick={() => {
                        navigate(`/candidateInfo/${row.candidates.id}`);
                      }}
                      text={
                        <TypographyAtom
                          label={row.candidates.name}
                          variant="body2"
                          color={`${theme.palette.primaryColor[500]}`}
                        />
                      }
                      variant="text"
                      data-testid="icon-button"
                    />
                  </TableRowCell>
                  <TableRowCell>
                    {row.report.adjudication === null ? (
                      <TypographyAtom
                        variant="body2"
                        color={`${theme.palette.textColor.lowemp}`}
                        label="-"
                      />
                    ) : row.report.adjudication === "ENGAGE" ? (
                      <StyledChip
                        label={row.report.adjudication}
                        backgroundColor={theme.palette.accentColor.lightgreen}
                        color={theme.palette.accentColor.green}
                      />
                    ) : (
                      <StyledChip
                        label={row.report.adjudication}
                        backgroundColor={theme.palette.accentColor.lightyellow}
                        color={theme.palette.accentColor.yellow}
                      />
                    )}
                  </TableRowCell>
                  <TableRowCell>
                    {row.report.status === "CLEAR" ? (
                      <StyledChip
                        label={row.report.status}
                        backgroundColor={theme.palette.accentColor.lightgreen}
                        color={theme.palette.accentColor.green}
                      />
                    ) : (
                      <StyledChip
                        label={row.report.status}
                        backgroundColor={theme.palette.accentColor.lightyellow}
                        color={theme.palette.accentColor.yellow}
                      />
                    )}
                  </TableRowCell>
                  <TableRowCell>
                    <TypographyAtom
                      label={row.candidates.location}
                      variant="body2"
                      color={`${theme.palette.textColor.highemp}`}
                    />
                  </TableRowCell>
                  <TableRowCell>
                    <TypographyAtom
                      label={formatDate(row.candidates.date)}
                      variant="body2"
                      color={`${theme.palette.textColor.highemp}`}
                    />
                  </TableRowCell>
                  <TableRowCell />
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {searchValue ? (
          <SearchFooterStack>
            <TypographyAtom
              label={`${
                filteredData.filter((row) =>
                  row.candidates.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                ).length
              } `}
              variant="caption"
              color={`${theme.palette.textColor.highemp}`}
            />
            <TypographyAtom
              label={"results found"}
              variant="caption"
              color={`${theme.palette.textColor.medemp}`}
            />
          </SearchFooterStack>
        ) : (
          <OuterFooterStack>
            <InnerFooterSatck>
              <Stack direction={"row"} gap={"4px"}>
                <TypographyAtom
                  label={`${filteredData.length} `}
                  variant="caption"
                  color={`${theme.palette.textColor.highemp}`}
                />
                <TypographyAtom
                  label={`out of 40 results`}
                  variant="caption"
                  color={`${theme.palette.textColor.medemp}`}
                />
              </Stack>
              <Select
                data-testid="select"
                value={pages}
                onChange={handlePagesChange}
                IconComponent={ExpandMoreIcon}
                sx={{
                  ...customSelectStyles(theme),
                }}
                inputProps={{
                  sx: {
                    ...customInputStyles(theme),
                  },
                }}
                MenuProps={{
                  sx: {
                    ...customMenuStyles(theme),
                  },
                }}
              >
                <MenuItem value={10}>10 per page </MenuItem>
                <MenuItem value={20} data-testid="menu-item">
                  20 per page
                </MenuItem>
                <MenuItem value={30}>30 per page</MenuItem>
                <MenuItem value={40}>40 per page</MenuItem>
              </Select>
            </InnerFooterSatck>
            <StyledPagination
              data-testid="pagination"
              count={Math.ceil(36 / pages)}
              shape="rounded"
              onChange={(event, value) => setCurrentPage(value)}
              page={currentPage}
              renderItem={(item) => (
                <PaginationItem {...item} component={Link} to="#" />
              )}
            />
          </OuterFooterStack>
        )}
      </TableContainer>
    </DataTableWrapper>
  );
}