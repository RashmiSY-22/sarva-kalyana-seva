import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventSlice";
export const store = configureStore({ reducer: { events: eventsReducer } });
