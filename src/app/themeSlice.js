import { createSlice } from "@reduxjs/toolkit";

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

const initialState = {
     darkMode: darkThemeMq.matches,
     connected: false,
};

export const themeSlice = createSlice({
     name: "darkMode",
     initialState,
     reducers: {
          changerTheme: (state) => {
               state.darkMode = !state.darkMode;
          },
     },
});

export const connectedSlice = createSlice({
     name: "connected",
     initialState,
     reducers: {
          setConnected: (state) => {
               state.connected = !state.connected;
          },
     },
});

export const { changerTheme } = themeSlice.actions;
export const { setConnected } = connectedSlice.actions;

export const ThemeValue = (state) => state.themeMode.darkMode;
export const connectedValue = (state) => state.connectedMode.connected;

export default themeSlice.reducer;
