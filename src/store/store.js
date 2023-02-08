import { configureStore , createSlice } from "@reduxjs/toolkit";
import gnbData from "../data/gnb/gnb";

let gnb = createSlice({
    name: 'gnb',
    initialState: gnbData
});

let subVisualTitle = createSlice({
    name: 'subVisualTitle',
    initialState: {
        value: {title: ''}
    },

    reducers: {
        setSubVisualTitle: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setSubVisualTitle } = subVisualTitle.actions;

export default configureStore({
    reducer: {
        gnb: gnb.reducer,
        subVisualTitle: subVisualTitle.reducer
    },
});