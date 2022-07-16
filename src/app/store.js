import changerTheme from "./themeSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
     persistReducer,
     FLUSH,
     REHYDRATE,
     PAUSE,
     PERSIST,
     PURGE,
     REGISTER,
} from "redux-persist";

const persistConfig = {
     type: "persist/PERSIST",
     key: "root",
     storage,
};
const persistedReducer = persistReducer(persistConfig, changerTheme);

export const store = configureStore({
     reducer: {
          themeMode: persistedReducer,
          connectedMode: persistedReducer,
     },
     middleware: getDefaultMiddleware({
          serializableCheck: {
               ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
               ],
          },
     }),
});
