import { createSlice } from "@reduxjs/toolkit";
import { Weather } from "../models/Weather";

interface WeatherData {
    Weather: Weather[];
    loading: boolean;
    value: string;
    results: Weather[];
    searchLabel: string;
  }
  
  const initialState = {
    Weather: [],
    loading: false,
    value: "",
    results: [],
    searchLabel: '',
  } as WeatherData;
  
  const weatherSlicer = createSlice({
    name: "weather",
    initialState: initialState,
    reducers: {
      getInitialData(state, action) {
        return {
          ...state,
          Weather: action.payload,
          results: action.payload,
          loading: false,
        };
      },
      startSearch(state, action) {
        return {
          ...state,
          value: action.payload,
          loading: true,
        };
      },
      finishSearch(state, action) {
        return {
          ...state,
          results: action.payload.results,
          loading: false,
          searchLabel: action.payload.searchLabel
        };
      },
      updateSelection(state, action) {
        return {
          ...state,
          results: action.payload,
        };
      },
      clearSearch(state) {
        return {
          ...state,
          loading: false,
          results:[],
          searchLabel:''
        };
      },
    },
  });
  
  export const WeatherActions = weatherSlicer.actions;

  export default weatherSlicer.reducer; 