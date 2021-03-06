import React, { useState } from "react";
import {
     Typography,
     Box,
     Card,
     CardHeader,
     CardActions,
     CardContent,
     Grid,
     IconButton,
     MenuItem,
     ListItemIcon,
     ListItemText,
     Avatar,
     Container,
} from "@mui/material";
import { Task } from "./testDB";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuAction from "../components/forms/menu";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { useNavigate } from "react-router-dom";

const ActionButton = [
     {
          name: "Supprimer",
          icon: <DeleteOutlineOutlinedIcon />,
          path: "/delete",
     },
     {
          name: "Modifier",
          icon: <DriveFileRenameOutlineOutlinedIcon />,
          path: "/delete",
     },
];

export default function MainPage() {
     const navigate = useNavigate();
     const [anchorEl, setAnchorEl] = useState(null);
     const openMenu = (e) => {
          setAnchorEl(e.currentTarget);
     };
     const closeMenu = () => {
          setAnchorEl(null);
     };
     const openMenue = Boolean(anchorEl);
     const nombre_personne = 100;
     //Action atao amin'ny j'aime

     return (
          <Box className="">
               <div>
                    <Typography align="left" variant="h5">
                         Vos taches :
                    </Typography>
                    <br />
                    <Grid
                         container
                         direction="row"
                         justifyContent="start"
                         alignItems="center"
                         spacing={2}
                    >
                         {Task.map((item, key) => (
                              <Grid key={key} item md={12} sm={12} xs={12}>
                                   <Card
                                        variant="outlined"
                                        className="card_task"
                                   >
                                        <CardHeader
                                             subheader={item.date}
                                             title={item.titre}
                                             action={
                                                  <IconButton aria-label="settings">
                                                       <MoreVertIcon
                                                            onClick={openMenu}
                                                       />
                                                  </IconButton>
                                             }
                                             align={"left"}
                                        />
                                        <CardContent>
                                             <Typography align="left" paragraph>
                                                  {item.content}
                                             </Typography>
                                        </CardContent>
                                        <CardActions>
                                             <div className="cardAction_task">
                                                  <Container
                                                       sx={{
                                                            display: "flex",
                                                            justifyContent:
                                                                 "space-between",
                                                            alignContent:
                                                                 "center",
                                                       }}
                                                  >
                                                       <div
                                                            style={{
                                                                 display: "flex",
                                                                 justifyContent:
                                                                      "start",
                                                                 alignItems:
                                                                      "center",
                                                            }}
                                                       >
                                                            <Avatar className="Avatar">
                                                                 A
                                                            </Avatar>
                                                            <Avatar className="Avatar">
                                                                 B
                                                            </Avatar>
                                                            <Avatar className="Avatar">
                                                                 C
                                                            </Avatar>
                                                            {/* Rehefa misy sary dia
                                                            ovaina ny Avatar,
                                                            apetraka hoe:{" "}
                                                            <Avatar src="lien misy ny sary" /> */}
                                                            {nombre_personne >=
                                                            3 ? (
                                                                 <Typography
                                                                      sx={{
                                                                           marginLeft: 2,
                                                                      }}
                                                                 >
                                                                      {"      "}
                                                                      Avec{" "}
                                                                      {nombre_personne -
                                                                           3}{" "}
                                                                      autres
                                                                      personnes
                                                                 </Typography>
                                                            ) : (
                                                                 ""
                                                            )}
                                                       </div>
                                                       <div>
                                                            <Typography
                                                                 component={
                                                                      "cite"
                                                                 }
                                                            >
                                                                 4 Tache(s)
                                                            </Typography>
                                                       </div>
                                                  </Container>
                                             </div>
                                        </CardActions>
                                   </Card>
                              </Grid>
                         ))}
                    </Grid>
                    <br />
               </div>
               <MenuAction
                    anchorEl={anchorEl}
                    open={openMenue}
                    closeMenu={closeMenu}
                    content={ActionButton.map((item, key) => (
                         <MenuItem
                              key={key}
                              onClick={(e) => {
                                   navigate(item.path);
                              }}
                         >
                              <ListItemIcon to>{item.icon}</ListItemIcon>
                              <ListItemText>{item.name}</ListItemText>
                         </MenuItem>
                    ))}
               />
          </Box>
     );
}
