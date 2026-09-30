import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Annadana Food Seva", date: "Every Sunday", location: "Kalaburagi", category: "Annadana", description: "Food support for people who need a caring helping hand." },
  { id: 2, title: "School Seva & Learning Program", date: "Monthly", location: "Partner schools", category: "Education", description: "Programs that encourage students through learning, creativity and community values." },
  { id: 3, title: "Kalaprerna Art Initiative", date: "26 January 2026", location: "Participating schools", category: "Education", description: "A Republic-themed inter-school art competition celebrating young voices." },
  { id: 4, title: "Community Health Awareness", date: "Quarterly", location: "Kalaburagi", category: "Health", description: "Awareness and support activities focused on healthier communities." }
];

const slice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => { state.push({ ...action.payload, id: Date.now() }); },
    updateEvent: (state, action) => {
      const index = state.findIndex(e => e.id === action.payload.id);
      if (index !== -1) state[index] = { ...state[index], ...action.payload };
    },
    deleteEvent: (state, action) => state.filter(e => e.id !== action.payload)
  }
});
export const { addEvent, updateEvent, deleteEvent } = slice.actions;
export default slice.reducer;
