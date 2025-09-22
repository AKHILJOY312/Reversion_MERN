import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
  "user/fetch",
  async (userId, thunkApi) => {
    const response = new Promise((resolve, reject) => {
      if (userId === 1) {
        resolve({ id: 1, name: "sam", email: "same@mail.com" });
      } else {
        reject(thunkApi.rejectWithValue("user not found"));
      }
    });
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
