import React, { useEffect, useState ,ChangeEvent} from "react";
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
  Stack,
  Theme,
  Card,
  InputAdornment,
} from "@mui/material";
import { CandidateInformationAdverse } from "../../../constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../../../theme/Theme";
import TypographyAtom from "../../atoms/Typography";
import FilterIcon from "../../../../public/assests/images/Filter.svg";
import SearchIcon from "../../../../public/assests/images/search.svg";
import TextInput from "../../atoms/Textfield";
import IconButton from "../../atoms/IconButton";
import CustomChip from "../../atoms/chip";
import Icon from "../../atoms/icon";
import Filter from "../FilterPopup";
import { AdverseActions } from "../../utils/types";
import { retrieveAdverseActionData } from "../../../services/adverseAction/getAdverseActions";
import { formatDate } from "../../utils/functions";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import styled from "styled-components";

export interface TableProps {
  isCandidateFilter: boolean;
}

const DataTableWrapper = styled(Card)`
  width: 1476px;
  height: auto;
  flex-shrink: 0;
  border-radius: 6px;
  background-color: ${theme.palette.structural.white};
  border-color: ${theme.palette.textColor.white};

  margin-top: 2px;
  margin-left: 20px;
`;

const HeaderWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 60px;
  margin: 5px;
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
  width: 950px;
  margin-left: 50px;
  gap: 10px;
  margin-top: 10px;
`;

const FilterButton = styled(IconButton)`
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
`;

const DropdownButton = styled(IconButton)`
  background-color: ${theme.palette.structural.white};
  border-color: ${theme.palette.structural.stroke};
  width: 169px;
  height: 36px;
  border-radius: 6px;
  margin-bottom: 7px;
  color: ${theme.palette.greyColor.icon01};
  &:hover {
    background-color: ${theme.palette.textColor.white};
    border-color: ${theme.palette.structural.stroke};
  }
`;

const TableHeaderCell = styled(TableCell)`
  padding: 12px;
  background-color: ${theme.palette.primaryColor[100]};
  border-color: ${theme.palette.structural.stroke};
`;

const TableRowCell = styled(TableCell)`
  padding: 12px;
`;
const StyledChips = styled(CustomChip)`
  font-weight: ${theme.typography.caption3.fontWeight};
  line-height: ${theme.typography.caption3.lineHeight};
  font-size: ${theme.typography.caption3.fontSize};
  font-family: ${theme.typography.fontFamily};
`;

const customSelectStyle = (theme: Theme) => ({
  height: "26px",
  border: `0.8px solid ${theme.palette.structural.stroke}`,
  boxShadow: "none",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.structural.stroke} !important`,
  },
});

const customInputStyle = (theme: Theme) => ({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "18px",
  color: theme.palette.textColor.highemp,
});

const customMenuStyle = (theme: Theme) => ({
  "& li": {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "18px",
    color: theme.palette.textColor.highemp,
  },
});

const StyledPaginationAdv = styled(Pagination)({
  "& .Mui-selected, & .css-f2rzto-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
    {
      backgroundColor: theme.palette.primaryColor[300],
      color: theme.palette.primaryColor[500],
    },
});

const SearchFooterStackAdv = styled(Stack)({
  display: "flex",
  alignItems: "center",
  height: "52px",
  paddingLeft: "8px",
  flexDirection: "row",
  gap: "6px",
});

const OuterFooterStackAdv = styled(Stack)({
  height: "50px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px",
});

const InnerFooterSatckAdv = styled(Stack)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  flexDirection: "row",
});

export interface AdverseActionsTableProps {
  isCandidateFilter: boolean;
}

const AdverseActionsTable = (props: AdverseActionsTableProps) => {
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [all, setAll] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string[]>([""]);
  const [adverseActionData, setAdverseActionData] = useState<AdverseActions[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [pages, setPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagesChange = (event: SelectChangeEvent<number>) => {
    setPages(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleStatusFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAll(false);
    if (e.target.checked) {
      setStatusFilter([...statusFilter, val.toUpperCase()]);
    } else {
      setStatusFilter(statusFilter.filter((status) => status !== val));
    }
  };

  const handleOpenFilter = () => {
    setFilterOpen(true);
  };
  const handleCloseFilter = () => {
    setFilterOpen(false);
    setStatusFilter([""]);
    setAll(true);
  };

  const fetchData = async () => {
    try {
      const response = await retrieveAdverseActionData();
      setAdverseActionData(response);
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

  const filteredData = all
    ? adverseActionData
    : adverseActionData.filter(
        (row) => statusFilter.includes(row.status) || statusFilter.length === 0
      );

  return (
    <DataTableWrapper data-testid="datatable">
      <HeaderWrapper>
        <TitleWrapper data-testid="typography-test">
          <TypographyAtom
            variant="subtitle1"
            label={CandidateInformationAdverse.tableHeader}
            color="theme.palette.textColor.highemp"
          />
        </TitleWrapper>
        {filterOpen && (
          <Filter
            handleClose={handleCloseFilter}
            isCandidatesFilter={props.isCandidateFilter}
            handleFilterStatusChange={handleStatusFilter}
            filterStatus={statusFilter}
            data-testid="filter-popup"
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
            placeholder={CandidateInformationAdverse.searchPlaceholder}
            value={search}
            onChange={handleChange}
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
        </FilterWrapper>
      </HeaderWrapper>
      <Divider />
      <TableContainer
        sx={{ boxShadow: "0px 4px 28px 0px rgba(45, 45, 47, 0.10)" }}
        component={Paper}
      >
        <Table>
          <TableHead data-testid="tableheadertest">
            <TableRow>
              {CandidateInformationAdverse.columnsData.map((column) => (
                <TableHeaderCell key={column.id}>
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
                row.name.toLowerCase().includes(search.toLowerCase())
              )
              .slice(0, 10) // Display the first 10 rows
              .map((row) => (
                <TableRow key={row.id}>
                  <TableRowCell>
                    <TypographyAtom
                      label={row.name}
                      variant="body2"
                      color={`${theme.palette.primaryColor[500]}`}
                    />
                  </TableRowCell>
                  <TableRowCell>
                    <StyledChips
                      label={row.status}
                      backgroundColor={theme.palette.accentColor.lightblue}
                      color={theme.palette.accentColor.blue}
                    />
                  </TableRowCell>
                  <TableRowCell>
                    <TypographyAtom
                      label={formatDate(row.preNoticeDate)}
                      variant="body2"
                      color={`${theme.palette.textColor.highemp}`}
                      sx={{ paddingLeft: "9%" }}
                    />
                  </TableRowCell>
                  <TableRowCell>
                    <TypographyAtom
                      label={formatDate(row.postNoticeDate)}
                      variant="body2"
                      color={`${theme.palette.textColor.highemp}`}
                      sx={{ paddingLeft: "11.5%" }}
                    />
                  </TableRowCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {searchValue ? (
          <SearchFooterStackAdv>
            <TypographyAtom
              label={`${
                filteredData.filter((row) =>
                  row.name.toLowerCase().includes(searchValue.toLowerCase())
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
          </SearchFooterStackAdv>
        ) : (
          <OuterFooterStackAdv>
            <InnerFooterSatckAdv>
              <Stack direction={"row"} gap={"4px"}>
                <TypographyAtom
                  label={`${filteredData.length} `}
                  variant="caption"
                  color={`${theme.palette.textColor.highemp}`}
                />
                <TypographyAtom
                  label={`out of 10 results`}
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
                  ...customSelectStyle(theme),
                }}
                inputProps={{
                  sx: {
                    ...customInputStyle(theme),
                  },
                }}
                MenuProps={{
                  sx: {
                    ...customMenuStyle(theme),
                  },
                }}
              >
                <MenuItem value={10}>10 per page </MenuItem>
              </Select>
            </InnerFooterSatckAdv>
            <StyledPaginationAdv
              data-testid="pagination-Adv"
              count={Math.ceil(36 / pages)}
              shape="rounded"
              page={currentPage}
            />
          </OuterFooterStackAdv>
        )}
      </TableContainer>
    </DataTableWrapper>
  );
};

export default AdverseActionsTable;
