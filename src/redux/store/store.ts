import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import noteSlice, { loadNotesFromStorage } from "../slice/noteSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedNoteSlice = persistReducer(persistConfig, noteSlice);

export const store = configureStore({
  reducer: {
    notes: persistedNoteSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(loadNotesFromStorage as any)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
