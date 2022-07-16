import { Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
export default function page_401() {
     return (
          <div>
               <Toolbar />
               <Typography variant="h1" align={"center"}>
                    401
               </Typography>
               <Divider />
               <Typography variant="h5" align={"center"}>
                    Non autorisé
               </Typography>
          </div>
     );
}
