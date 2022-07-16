import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { CustomButton, CustomTextField } from "../forms/forms";
import InputBaseLabel from "./inputBaseLabel";

export default function Create(props) {
     return (
          <div>
               <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
               >
                    <Grid item md={12} xs={12}>
                         <Typography variant="h6">Nouvelle tache</Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                         <CustomTextField
                              type={"text"}
                              label="Titre de vos tache"
                         />
                    </Grid>
                    <Grid item md={12} xs={12}>
                         <div
                              style={{
                                   padding: "20px",
                              }}
                         >
                              <InputBaseLabel />
                         </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                         <CustomButton
                              fullWidth
                              name={"Ajouter"}
                              color={"primary"}
                         />
                    </Grid>
               </Grid>
          </div>
     );
}
