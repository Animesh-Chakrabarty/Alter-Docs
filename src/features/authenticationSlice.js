import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    data: {
      token: "",
      server: "",
      taskID: "",
    },
  },
  reducers: {
    setToken: (state, action) => {
      state.data.token = action.payload;
    },
    setServer: (state, action) => {
      state.data.server = action.payload;
    },
    setTaskID: (state, action) => {
      state.data.taskID = action.payload;
    },
  },
});

export default authenticationSlice.reducer;
export const { setToken, setServer, setTaskID } = authenticationSlice.actions;
