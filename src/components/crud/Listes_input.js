import {
     Checkbox,
     Paper,
     InputBase,
     IconButton,
     ListItem,
     ListItemIcon,
     ListItemText,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CommentIcon from "@mui/icons-material/Comment";

export const InputCheckBox = (props) => {
     return (
          <div
               style={{
                    display: "flex",
                    justifyContent: "start",
                    marginBottom: "2vh",
               }}
          >
               <Paper
                    variant="outlined"
                    component="form"
                    sx={{
                         borderRadius: 1,
                         p: "2px 5px",
                         display: "flex",
                         alignItems: "center",
                    }}
               >
                    <InputBase
                         sx={{ ml: 1, flex: 1 }}
                         placeholder="Ajouter un element dans la liste"
                         inputProps={{ "aria-label": "Rechercher" }}
                         value={props.value}
                    />
                    <IconButton
                         type="submit"
                         onAuxClick={props.Ajouter}
                         sx={{ p: "10px" }}
                         aria-label="search"
                    >
                         <AddIcon />
                    </IconButton>
               </Paper>
          </div>
     );
};

export const CheckBoxItem = (props) => {
     return (
          <ListItem
               secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                         <CommentIcon />
                    </IconButton>
               }
               style={{
                    border: "2px solid red",
               }}
          >
               <ListItemIcon>
                    <Checkbox
                         edge="start"
                         checked={props.checked}
                         tabIndex={-1}
                         disableRipple
                         inputProps={{ "aria-labelledby": props.labelId }}
                         onChange={props.SetCheck}
                    />
               </ListItemIcon>
               <ListItemText
                    id={props.labelId}
                    primary={`Line item ${props.text}`}
               />
          </ListItem>
     );
};
