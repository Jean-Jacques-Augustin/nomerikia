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
import { combineReducers } from "@reduxjs/toolkit";
import { addTask, markSelected } from "./taskSlice";

const persistConfig = {
     type: "persist/PERSIST",
     key: "root",
     storage,
};

const rootReducer = combineReducers({
     changerTheme: changerTheme,
     addTask: addTask,
     markSelected: markSelected,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
     reducer: persistedReducer,
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
