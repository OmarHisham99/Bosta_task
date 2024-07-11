import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TrackingInfo } from "../../Typings/TrackingInfo";

export interface TrackingData {
  trackingInfoData: TrackingInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: TrackingData = {
  trackingInfoData: null,
  loading: false,
  error: null,
};

export const fetchTrackingData = createAsyncThunk(
  "tracking/fetchTrackingData",
  async ({
    trackingNumber,
    lang,
  }: {
    trackingNumber: string;
    lang: string;
  }) => {
    const response = await axios.get(
      `https://tracking.bosta.co/shipments/track/${trackingNumber}?lang=${lang}`
    );
    const data = response.data;
    return {
      trackingData: data,
    };
  }
);

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrackingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTrackingData.fulfilled,
        (state, action: PayloadAction<{ trackingData: TrackingInfo }>) => {
          state.loading = false;
          state.trackingInfoData = action.payload.trackingData;
        }
      )
      .addCase(fetchTrackingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default trackingSlice.reducer;
