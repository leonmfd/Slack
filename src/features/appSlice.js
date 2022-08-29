import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },

  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

const selectRoomId = (state) => state.app.roomId;

export const { enterRoom } = appSlice.actions;

export{selectRoomId}

export default appSlice.reducer;
