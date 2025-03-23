import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://questionnaire-backend-kavo.onrender.com";

export const getQuizListThunk = createAsyncThunk(
  "quiz/getQuizListThunk",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/quiz`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteQuizListThunk = createAsyncThunk(
  "quiz/deleteQuizListThunk",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/quiz/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getByIdQuizElementThunk = createAsyncThunk(
  "quiz/getByIdQuizElementThunk",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/quiz/${id}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postQuizElementThunk = createAsyncThunk(
  "quiz/postQuizElementThunk",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/quiz`, body);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const putQuizElementThunk = createAsyncThunk(
  "quiz/putQuizElementThunk",
  async (obj, thunkAPI) => {
    console.log(obj);

    try {
      const response = await axios.put(`${BASE_URL}/quiz/${obj.id}`, obj.body);
      return { result: response.data.data, id: obj.id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
