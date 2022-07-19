import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { CustomButton, CustomTextField } from "../forms/forms";
import { Button } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { CheckBoxItem, InputCheckBox } from "./Listes_input";

export default function Create() {
     const [checked, setChecked] = useState(false);
     const [data, setData] = useState([
          {
               id: 1,
               titre: "Article 1",
               type: "liste",
               content: [
                    { id: 1, name: "SelectBox", selected: false },
                    { id: 2, name: "SelectBox", selected: true },
                    { id: 3, name: "SelectBox", selected: false },
                    { id: 4, name: "SelectBox", selected: true },
               ],
          },
     ]);

     const SetCheck = () => {
          setChecked(!checked);
     };
     const dataSelected = data.find((task) => task.id === 1);
     const AjoutTaskCombo = () => {
          dataSelected.content.push({ id: "", name: "", selected: "" });
     };

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
                         <Typography variant="h6" align="left">
                              Nouvelle tache
                         </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                         <CustomTextField
                              type={"text"}
                              label="Titre de vos tache"
                         />
                    </Grid>
                    <Grid item md={12} xs={12}>
                         <div>
                              <InputCheckBox />
                              {dataSelected.content.map((item, key) => (
                                   <CheckBoxItem
                                        checked={item.selected}
                                        key={key}
                                        text={item.name}
                                   />
                              ))}
                         </div>
                    </Grid>
                    <Grid item md={12} xs={12}>
                         <div>
                              {/* <TextesInputs /> */}
                              <div
                                   style={{
                                        display: "flex",
                                        margin: "2vh 0",
                                   }}
                              >
                                   <Button className="actionButtonCreate">
                                        Textes
                                   </Button>
                                   <Button className="actionButtonCreate">
                                        Listes
                                   </Button>
                                   <Button
                                        className="actionButtonCreate"
                                        startIcon={<PersonAddAlt1Icon />}
                                   >
                                        Ajout de(s) collaborateur(s)
                                   </Button>
                              </div>
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
