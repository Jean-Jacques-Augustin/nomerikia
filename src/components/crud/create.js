import React, { useState } from "react";
import { Grid, Typography, Container } from "@mui/material";
import { CustomButton, CustomTextField } from "../forms/forms";
import { Button } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { CheckBoxItem, CheckBoxUserShare, InputCheckBox } from "./Listes_input";
import TextesInputs from "./TextesInputs";
import { Tab } from "@mui/material";
import { TabContext } from "@mui/lab";
import { Box } from "@mui/material";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";
import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { DialogActions } from "@mui/material";
import { SearchBar } from "./../forms/forms";

export default function Create() {
     /**
      * States pour les application statique: NB: tsy azo kitihina fa efa mety io
      */

     const [openDialogShare, setOpenDialogShare] = useState(false);
     const [checked, setChecked] = useState(false);
     const [titre, setTitre] = useState("");
     const [activeTexts, setActiveTexts] = useState();
     const [value, setValue] = useState("1");

     /**
      * Templates pour les checkbox : fafana fotsiny de misolo ny avy any am base de donnée
      * mampiasa gestion d'état ihany moa zany, higererna ny modification ssy ny suppression
      */
     const [data] = useState([
          { id: 1, name: "SelectBox", selected: false },
          { id: 2, name: "SelectBox", selected: true },
          { id: 3, name: "Sel ectBox", selected: false },
          { id: 4, name: "SelectBox", selected: true },
     ]);

     //Templates pour les users
     const [UsersData, setUsersData] = useState([
          { id: "01", name: "test", email: "test_mailaka@mailaka.com" },
          { id: "01", name: "test", email: "test_mailaka@mailaka.com" },
          { id: "01", name: "test", email: "test_mailaka@mailaka.com" },
          { id: "01", name: "test", email: "test_mailaka@mailaka.com" },
          { id: "01", name: "test", email: "test_mailaka@mailaka.com" },
     ]);

     //Action manova ny state n'ny tab
     const handleChange = (event, newValue) => {
          setValue(newValue);
     };
     // Action ataon'ny user ref mcheck ny checkox
     const SetCheck = () => {
          setChecked(!checked);
     };

     //Action : mampiditra ny liste ao anaty base //Sous base no itenenako anazy fa miankina amin'ny DB
     const AjoutTaskCombo = () => {
          data.push({ id: "", name: "", selected: "" });
     };

     /**
      * Gesiton des etats et states n'ny Dialog user Share
      */

     const [checkedUser, setCheckedUser] = useState(false);

     const handleClickOpenDialogUser = () => {
          setOpenDialogShare(true);
     };

     const handleCloseDialogUser = () => {
          setOpenDialogShare(false);
     };

     const UserDialog = () => {
          return (
               <Dialog
                    open={openDialogShare}
                    onClose={handleCloseDialogUser}
                    aria-labelledby="titre-du-dialogue"
                    aria-describedby="dilogue-misokatra-rehefa-hanao-partage"
               >
                    <DialogTitle id="titre-du-dialogue">
                         {"Pargager ce notes avec des membres"}
                    </DialogTitle>
                    <DialogContent>
                         <DialogContentText id="dialog-description">
                              <SearchBar />
                              {UsersData.map((item, key) => (
                                   <CheckBoxUserShare
                                        key={key}
                                        checked={checked}
                                        email={item.name}
                                   />
                              ))}
                         </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                         <Button variant={"contained"}>Ajouter</Button>
                    </DialogActions>
               </Dialog>
          );
     };

     return (
          <Container>
               <div className="center">
                    <Grid
                         container
                         direction="row"
                         justifyContent="center"
                         alignItems="center"
                         spacing={2}
                         sx={{ maxWidth: 600 }}
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
                              <Box sx={{ width: "100%", typography: "body1" }}>
                                   <TabContext value={value}>
                                        <TabPanel
                                             value="1"
                                             sx={{
                                                  minHeight: 280,
                                                  padding: 0,
                                                  margin: 0,
                                             }}
                                        >
                                             <TextesInputs />
                                        </TabPanel>
                                        <TabPanel
                                             value="2"
                                             sx={{
                                                  minHeight: 280,
                                                  padding: 0,
                                                  margin: 0,
                                             }}
                                        >
                                             <InputCheckBox />
                                             {data.map((item, key) => (
                                                  <CheckBoxItem
                                                       selected={item.selected}
                                                       text={item.name}
                                                  />
                                             ))}
                                        </TabPanel>
                                        <Box>
                                             <TabList
                                                  onChange={handleChange}
                                                  aria-label="lab API tabs example"
                                                  align={"center"}
                                             >
                                                  <Tab
                                                       label="Textes"
                                                       value="1"
                                                       sx={{
                                                            textTransform:
                                                                 "none",
                                                            mr: 2,
                                                       }}
                                                  />
                                                  <Tab
                                                       label="Listes"
                                                       value="2"
                                                       sx={{
                                                            textTransform:
                                                                 "none",
                                                            mr: 2,
                                                       }}
                                                  />
                                                  <Button
                                                       className="actionButtonCreate"
                                                       startIcon={
                                                            <PersonAddAlt1Icon />
                                                       }
                                                       onClick={(e) =>
                                                            setOpenDialogShare(
                                                                 true,
                                                            )
                                                       }
                                                  >
                                                       Ajout de(s)
                                                       collaborateur(s)
                                                  </Button>
                                             </TabList>
                                        </Box>
                                   </TabContext>
                              </Box>
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <div>
                                   {/* <TextesInputs /> */}
                                   <div
                                        style={{
                                             display: "flex",
                                             margin: "2vh 0",
                                        }}
                                   ></div>
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
                    <UserDialog />
               </div>
          </Container>
     );
}
