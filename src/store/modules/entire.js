import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEntireRoomList } from "@/services/modules/entire";

// 请求更多数据 根据偏移量
export const fetchEntireRoomListAction = createAsyncThunk(
  "fetchEntireRoomList",
  (payload, { dispatch, getState }) => {
    dispatch(changeIsLoading(true));
    return getEntireRoomList(getState().entire.currentPage * 20, 20);
  }
);

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0,
    roomList: [],
    isLoading: false,
  },
  reducers: {
    changeCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
    changeIsLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchEntireRoomListAction.fulfilled,
      (state, { payload }) => {
        if (payload?.name === "AxiosError") {
          state.isLoading = false;
          return false;
        }
        state.isLoading = false;
        state.roomList = payload;
      }
    );
  },
});
export const { changeCurrentPage, changeIsLoading } = entireSlice.actions;
export default entireSlice.reducer;
