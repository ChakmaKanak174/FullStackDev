import authService from "./authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Get user from localStorage

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register user , this function deals with the backend
export const register = createAsyncThunk(
  "auth/register",
  // here user is passed from register page. this function is dispatched from that page.
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message); //errormessage as payload
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message); //errormessage as payload
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // anything inside the reduces are not asynchronous
  reducers: {
    // this function is dispatched after evrything is set, it resets back to default
    reset: (state) => {
      (state.isLoading = false),
        (state.isError = false),
        (state.isSuccess = false);
      state.message = "";
    },
  },

  // asynchronous functions are inside extrareducers
  extraReducers: (builder) => {
    // this function handles the async --- pending, fulfilled, rejected these are autimatically handled by redux toolkit
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions; // diferent export syntax for reducers inside slice.
export default authSlice.reducer; // reducer is a function of the toolkit, not exactly the function that we write above. it uses our function inside it.
