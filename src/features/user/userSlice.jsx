import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false, // This will be used to ensure that a user will not be able to click the submit btn when the page is loading
  user: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
});

console.log(userSlice);

export default userSlice.reducer;
