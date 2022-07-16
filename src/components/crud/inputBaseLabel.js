import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function InputBaseLabel() {
     const [checkList, setChackList] = useState([]);
     return (
          <div>
               <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Atody" />
                    <FormControlLabel control={<Checkbox />} label="Akoho" />
               </FormGroup>
          </div>
     );
}
