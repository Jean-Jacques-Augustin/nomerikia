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
import CloseIcon from "@mui/icons-material/Close";
import { Avatar } from "@mui/material";

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
                         width: 600,
                    }}
                    fullWidth
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
                         <CloseIcon />
                    </IconButton>
               }
          >
               <ListItemIcon>
                    <Checkbox
                         edge="start"
                         checked={props.checked}
                         tabIndex={-1}
                         disableRipple
                         inputProps={{ "aria-labelledby": props.text }}
                         onChange={props.SetCheck}
                    />
               </ListItemIcon>
               <ListItemText id={props.text} primary={props.text} />
          </ListItem>
     );
};

export const CheckBoxUserShare = (props) => {
     return (
          <ListItem>
               <ListItemIcon>
                    <Checkbox
                         checked={props.checked}
                         tabIndex={-1}
                         disableRipple
                         inputProps={{ "aria-labelledby": props.email }}
                         onChange={props.setShare}
                    />
               </ListItemIcon>
               <Avatar>{props.email[0]}</Avatar>
               <ListItemText id={props.text} primary={props.email} />
          </ListItem>
     );
};
