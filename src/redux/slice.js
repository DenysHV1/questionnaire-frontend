import { createSlice } from "@reduxjs/toolkit";
import {
  deleteQuizListThunk,
  getByIdQuizElementThunk,
  getQuizListThunk,
  postQuizElementThunk,
  putQuizElementThunk,
} from "./operations.js";

const initialState = {
  quizList: [],
  quizElement: null,
  isLoading: false,
  errorMessage: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.errorMessage = null;
};

const handleRejected = (state, { payload }) => {
  state.errorMessage = payload;
  state.quizElement = null;
  state.isLoading = false;
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getQuizListThunk.pending, handlePending)
      .addCase(getQuizListThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.quizList = payload;
      })
      .addCase(getQuizListThunk.rejected, handleRejected)

      .addCase(deleteQuizListThunk.fulfilled, (state, { payload }) => {
        state.quizList = state.quizList.filter((item) => item._id !== payload);
      })
      .addCase(deleteQuizListThunk.rejected, handleRejected)

      .addCase(getByIdQuizElementThunk.pending, handlePending)
      .addCase(getByIdQuizElementThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.quizElement = payload;
      })
      .addCase(getByIdQuizElementThunk.rejected, handleRejected)

      .addCase(postQuizElementThunk.pending, handlePending)
      .addCase(postQuizElementThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.quizList = [...state.quizList, payload];
      })
      .addCase(postQuizElementThunk.rejected, handleRejected)

      .addCase(putQuizElementThunk.pending, handlePending)
      .addCase(putQuizElementThunk.rejected, handleRejected)
      .addCase(putQuizElementThunk.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export default quizSlice.reducer;
