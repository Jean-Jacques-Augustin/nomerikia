import AddIcon from "@mui/icons-material/Add";
import NotesIcon from "@mui/icons-material/Notes";
import ReplyIcon from "@mui/icons-material/Reply";

export const SidebarLink = [
     { name: "Mes Notes", icon: <NotesIcon />, path: "/main" },
     { name: "Notes partagée", icon: <ReplyIcon />, path: "/shared" },
     { name: "Nouvelle tache", icon: <AddIcon />, path: "/create_task" },
];
