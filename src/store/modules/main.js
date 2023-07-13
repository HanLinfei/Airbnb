import { createSlice } from "@reduxjs/toolkit";

const main = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
    },
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload;
    },
  },
});

export const { changeHeaderConfigAction } = main.actions;
export default main.reducer;
