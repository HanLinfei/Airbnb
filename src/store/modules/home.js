import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeGoodScoreData,
  getHomeDiscountData,
  getHomeRecomendData,
  getHomeLongforData,
} from "@/services";
// 高性价比房源
export const fetchHomeDataGoodPriceAction = createAsyncThunk(
  "fetchHomeDataGoodPrice",
  () => {
    return getHomeGoodPriceData();
  }
);

// 高评分房源
export const fetchHomeDataHighScoreAction = createAsyncThunk(
  "fetchHomeDataHighScore",
  () => {
    return getHomeGoodScoreData();
  }
);

// 折扣房源
export const fetchHomeDataDiscountAction = createAsyncThunk(
  "fetchHomeDataDiscount",
  (payload, { dispatch, getState }) => {
    return getHomeDiscountData();
  }
);

// 热门景点
export const fetchHomeDataRecommendAction = createAsyncThunk(
  "fetchHomeRecommend",
  () => {
    return getHomeRecomendData();
  }
);

// 猜你想去
export const fetchHomeLongforAction = createAsyncThunk(
  "fetchHomeLongfor",
  () => {
    return getHomeLongforData();
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    goodHighScoreInfo: {},
    goodDiscountInfo: {},
    goodRecommend: {},
    goodLongfor: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchHomeDataGoodPriceAction.fulfilled,
      (state, { payload }) => {
        if (payload?.name === "AxiosError") {
          return false;
        }
        state.goodPriceInfo = payload;
      }
    );
    builder.addCase(
      fetchHomeDataHighScoreAction.fulfilled,
      (state, { payload }) => {
        if (payload?.name === "AxiosError") {
          return false;
        }
        state.goodHighScoreInfo = payload;
      }
    );
    builder.addCase(
      fetchHomeDataDiscountAction.fulfilled,
      (state, { payload }) => {
        if (payload?.name === "AxiosError") {
          return false;
        }
        state.goodDiscountInfo = payload;
      }
    );
    builder.addCase(
      fetchHomeDataRecommendAction.fulfilled,
      (state, { payload }) => {
        if (payload?.name === "AxiosError") {
          return false;
        }
        state.goodRecommend = payload;
      }
    );
    builder.addCase(fetchHomeLongforAction.fulfilled, (state, { payload }) => {
      if (payload?.name === "AxiosError") {
        return false;
      }
      state.goodLongfor = payload;
    });
  },
});

export default homeSlice.reducer;
