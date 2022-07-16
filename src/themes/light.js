import { createTheme } from "@mui/material";
import Doris from "@fontsource/dosis";

export const light_theme = createTheme({
     typography: {
          fontFamily: [
               Doris,
               "-apple-system",
               "BlinkMacSystemFont",
               '"Segoe UI"',
               "Roboto",
               '"Helvetica Neue"',
               "Arial",
               "sans-serif",
               '"Apple Color Emoji"',
               '"Segoe UI Emoji"',
               '"Segoe UI Symbol"',
          ].join(","),
     },
     palette: {
          mode: "light",
          primary: {
               main: "#1565c0",
          },
          secondary: {
               main: "#d32f2f",
          },
     },
});
