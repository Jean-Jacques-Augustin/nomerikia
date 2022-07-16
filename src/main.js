import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationNotConnected from "./components/navigationNotConected";
import Login from "./pages/login";
import "./styles/global.css";
import Inscription from "./pages/inscription";
import Pages404 from "./pages/404";
import NavigationConnected from "./components/navigationConected";
import { Connected } from "./constantes";
import SideBar from "./components/sideBar";
import MainPage from "./pages/mainPage";
import { Box } from "@mui/material";
import Create from "./components/crud/create";

export default function Main() {
     return (
          <div>
               {Connected ? (
                    <NavigationConnected />
               ) : (
                    <NavigationNotConnected />
               )}

               <Box sx={{ display: "flex" }}>
                    {Connected ? <SideBar /> : ""}
                    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 9 }}>
                         <div>
                              <Routes>
                                   <Route
                                        index
                                        path="/signin"
                                        element={<Login />}
                                   />
                                   <Route
                                        path="/signup"
                                        element={<Inscription />}
                                   />
                                   <Route path="*" element={<Pages404 />} />
                                   {/**
                                    * Liens protègé
                                    */}
                                   <Route path="/main" element={<MainPage />} />
                                   <Route
                                        path="/create_task"
                                        element={<Create />}
                                   />
                              </Routes>
                         </div>
                    </Box>
               </Box>
          </div>
     );
}
