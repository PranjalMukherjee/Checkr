import React from "react";
import { Button, Stack,SxProps,Theme } from "@mui/material";
import IconButtons from "../../atoms/IconButton";
import MyTypo from "../../atoms/Typography";
import theme from "../../../theme/Theme";
import Down from "../../../../public/assests/images/Arrow_Down.svg";
import left from "../../../../public/assests/images/Icon.svg";
import right from "../../../../public/assests/images/right.svg";
import styled from "@emotion/styled";

import Icon from "../../atoms/icon";

const DropButton = styled(Button)`
  background-color: ${theme.palette.structural.white};
  border-color: ${theme.palette.structural.stroke};
  width: 190px;
  height: 35px;
  border-radius: 6px;
  margin-bottom: 7px;
  color: ${theme.palette.textColor.highemp};
  text-transform: none;
  &:hover {
    background-color: ${theme.palette.textColor.white};
    border-color: ${theme.palette.structural.stroke};
  }
`;

const PaginationButtons = styled(Button)({
  minWidth: "10px",
  "&:focus": {
    color: theme.palette.primaryColor[500],
    backgroundColor: theme.palette.primaryColor[300],
  },
  "&:disabled": {
    backgroundColor: theme.palette.greyColor.icon02,
  },
});
const StyledTypography = styled(MyTypo)({
  "&:focus": {
    color: theme.palette.primaryColor[500],
  },
  backgroundColor: theme.palette.primaryColor[300]
});
export interface FooterProps {
  sx?: SxProps<Theme>;
  width?: string | number;
}

const Pagination = (props: FooterProps) => {
  return (
    <Stack sx={{ padding: props.width}} >
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        alignItems="center"
      >
        <Stack direction="row" alignItems="center" spacing={2} 
         style={{ marginLeft: "10px" }}>
          <Stack direction="row" alignItems="center" gap="3px" >
            <MyTypo
              label="10"
              color={`${theme.palette.textColor.highemp}`}
              variant="caption3"
            />
            <MyTypo
              label="out of 84 results"
              color={`${theme.palette.textColor.medemp}`}
              variant="caption3"
            />
          </Stack>
          <DropButton
            variant="outlined"
            endIcon={<Icon src={Down} />}
            data-testid="drop-button"
          >
            10 per page
          </DropButton>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2} >
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButtons variant="text" icon={left} />
            <PaginationButtons variant="text" sx={{background: theme.palette.primaryColor[300]}}>
              <StyledTypography
                label="1"
                color={`${theme.palette.primaryColor[500]}`}
                variant="caption3"
              />
            </PaginationButtons>
            <PaginationButtons variant="text">
              <StyledTypography
                label="2"
                color={`${theme.palette.textColor.highemp}`}
                variant="caption3"
                sx={{ ":focus": `${theme.palette.primaryColor[500]}` }}
              />
            </PaginationButtons>
            <IconButtons
              text={
                <MyTypo
                  label="3"
                  color={`${theme.palette.textColor.highemp}`}
                  variant="caption3"
                />
              }
              variant="text"
            />
            <IconButtons variant="text" icon={right} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Pagination;
