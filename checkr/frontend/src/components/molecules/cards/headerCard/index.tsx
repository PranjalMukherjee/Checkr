import React from "react";
import theme from "../../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import {Grid, Stack } from "@mui/material";
import IconButton from "../../../atoms/IconButton";
import exp from "../../../../../public/assests/images/Export.svg";
import MANUALORDER from "../../../../../public/assests/images/manualOrder.svg"
import MyTypo from "../../../atoms/Typography";
export interface HeaderProps{
  onClickExport?: () => void

}

const HeaderCard = (props:HeaderProps) => {
  return (
    <ThemeProvider theme={theme}>
      
        <Grid container justifyContent="space-between" padding="7px" marginTop="26px">
          <Grid item 
           marginBottom="-18px" paddingTop="13px">

            <MyTypo
              label="Candidates"
              color={`${theme.palette.textColor.highemp}`}
              variant="heading1"
            />
          </Grid>
          <Stack direction="row" spacing={2} >
            <IconButton
              data-testid="export-element"
              sx={{
                backgroundColor: theme.palette.structural.white,
                color: theme.palette.textColor.highemp,
                borderColor: theme.palette.structural.stroke,
                "&:hover": {
                  backgroundColor: theme.palette.textColor.white,
                  color: theme.palette.textColor.highemp,
                  borderColor: theme.palette.structural.stroke,
                },
              }}
              text="Export"
              variant="outlined"
              icon={exp}
              onClick={props.onClickExport}
          
            />
            <IconButton
              data-testid="order-element"
              sx={{
                backgroundColor: theme.palette.primaryColor[500],
                color: theme.palette.structural.white,
                borderColor: theme.palette.structural.stroke,
                "&:hover": {
                  backgroundColor: theme.palette.primaryColor[500],
                  color: theme.palette.structural.white,
                  borderColor: theme.palette.structural.stroke,
                },
              }}
              text="Manual Order"
              variant="contained"
              icon={MANUALORDER}
            />
          </Stack>
        </Grid>
     
    </ThemeProvider>
  );
};

export default HeaderCard;
