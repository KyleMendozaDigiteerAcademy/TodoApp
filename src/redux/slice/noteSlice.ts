//TODO: Create a Slice of Note Item with type according to item example: ( title, description )
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface Note {
  NoteTitle: string | null;
  NoteDescription: string | null;
}

interface NoteState {
  Notes: Note[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: NoteState = {
  Notes: [],
  status: "idle",
  error: null
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.Notes.push(action.payload);
    },
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.Notes = action.payload;
    }
  }
});

export const { addNote, setNotes } = noteSlice.actions;
export const selectNotes = (state: { Notes: NoteState }) => state.Notes.Notes;

// Asynchronous action using Redux Thunk to load todos from AsyncStorage
export const loadNotesFromStorage = () => async (dispatch: any) => {
  try {
    const storedNotesString = await AsyncStorage.getItem("Notes");

    if (storedNotesString) {
      const storedNotes = JSON.parse(storedNotesString) as Note[];
      dispatch(setNotes(storedNotes));
    }
  } catch (error) {
    console.error("Error Loading Notes from Storage", error);
  }
};

export default noteSlice.reducer;
