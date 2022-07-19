import { TextField } from "@mui/material";
import React from "react";

export default function TextesInputs() {
     return (
          <div>
               <TextField
                    type={"text"}
                    size={"medium"}
                    label={"Votre notes"}
                    variant="outlined"
                    className={"TextField"}
                    multiline
                    fullWidth
                    rows={10}
               />
          </div>
     );
}
