import { configureStore , createSlice } from "@reduxjs/toolkit";
import gnbData from "data/gnb/gnb";

let gnb = createSlice({
    name: 'gnb',
    initialState: gnbData
});

let routerScroll = createSlice({
    name: 'routerScroll',
    initialState: true,

    reducers: {
        setRouterScroll: (state, action) => {
            state = action.payload;
            return state;
        }
    }
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

let imgSkeleton = createSlice({
    name: 'imgSkeleton',
    initialState: true,

    reducers: {
        setImgSkeleton: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

let startState = createSlice({
    name: 'startState',
    initialState: true,

    reducers: {
        setStartState: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

export const { setSubVisualTitle } = subVisualTitle.actions;
export const { setRouterScroll } = routerScroll.actions;
export const { setImgSkeleton } = imgSkeleton.actions;
export const { setStartState } = startState.actions;

export default configureStore({
    reducer: {
        gnb: gnb.reducer,
        subVisualTitle: subVisualTitle.reducer,
        routerScroll: routerScroll.reducer,
        imgSkeleton: imgSkeleton.reducer,
        startState: startState.reducer
    },
});