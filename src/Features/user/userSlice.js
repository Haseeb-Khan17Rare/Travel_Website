import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  traveler: JSON.parse(localStorage.getItem("travelerdetails")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerTraveler: (state, action) => {
      state.traveler = action.payload;
      localStorage.setItem("travelerdetails", JSON.stringify(action.payload));
    },
    logoutTraveler: (state) => {
      state.traveler = null;
      localStorage.removeItem("travelerdetails");
    },
  },
});

export const { registerTraveler, logoutTraveler } = userSlice.actions;
export default userSlice.reducer;
