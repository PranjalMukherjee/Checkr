import React, { ReactNode } from "react";
import { Grid } from "@mui/material";
import Icon from "../../atoms/icon";

interface LoginTemplateProps {
  image: string;
  content?: ReactNode;
}

export const LoginTemplate = ({ image, content }: LoginTemplateProps) => {
  return (

    <Grid container spacing={6} data-testid="LoginTemplate">
     <Grid item xs={12} md={6}>
     <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={6}>
            <Icon src={image} width={"100%"} alt="LoginScreen" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} mt={12}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={8} >
            {content}
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
  );
};
