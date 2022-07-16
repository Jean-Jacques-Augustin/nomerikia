import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";

import { CustomButton } from "./forms/forms";
import logoSmall from "../icons/LOGO/nomerikia_logo_small.png";
import { Link } from "react-router-dom";

export default function NavigationNotConnected() {
     return (
          <AppBar
               color="inherit"
               position="fixed"
               sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
               <Toolbar className="navbar_nav">
                    <img src={logoSmall} alt="Logo du site" />
                    <div>
                         <Button
                              className="custom_button"
                              component={Link}
                              to={"/signin"}
                              variant={"contained"}
                              disableElevation
                         >
                              Connexion
                         </Button>
                         <Button
                              className="custom_button"
                              component={Link}
                              to={"/signup"}
                              variant={"contained"}
                              disableElevation
                              color="secondary"
                         >
                              Inscription
                         </Button>
                    </div>
               </Toolbar>
          </AppBar>
     );
}
