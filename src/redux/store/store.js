import { configureStore, createSlice } from "@reduxjs/toolkit";
import gnbData from "locales/ko/gnb/gnb";
import kartbodyCommonData from "locales/ko/kartbody/contents.json";
import characterCommonData from "locales/ko/character/common/contents.json";
import commonRouteData from "data/route.json";
import difficultyData from "data/difficulty.json";
import trackData from "locales/ko/common/track.json";

let gnb = createSlice({
    name: 'gnb',
    initialState: gnbData
});

let gnbActive = createSlice({
    name: 'gnbActive',
    initialState: null,

    reducers: {
        setGnbActive: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

let kartbodyCommon = createSlice({
    name: 'kartbodyCommon',
    initialState: kartbodyCommonData.kartName
});

let characterCommonName = createSlice({
    name: 'characterCommonName',
    initialState: characterCommonData.card
});

let selectIndex = createSlice({
    name: 'selectIndex',
    initialState: {
        kartIndex: 0,
        characterIndex: 0,
        langIndex: 0,
        channelIndex: 0
    },

    reducers: {
        setSelectIndex: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

let outside = createSlice({
    name: 'outside',
    initialState: false,

    reducers: {
        setOutside: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

let toggle = createSlice({
    name: 'toggle',
    initialState: {
        bottomSheet: null,
        clipBoard: false,
        lang: false
    },

    reducers: {
        setToggle: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

let commonRoute = createSlice({
    name: 'commonRoute',
    initialState: commonRouteData
});

let difficulty = createSlice({
    name: 'difficulty',
    initialState: difficultyData
});

let language = createSlice({
    name: 'language',
    initialState: "ko",

    reducers: {
        setLanguage: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

let tracks = createSlice({
    name: 'tracks',
    initialState: trackData,
});

export const { setGnbActive } = gnbActive.actions;
export const { setSelectIndex } = selectIndex.actions;
export const { setOutside } = outside.actions;
export const { setToggle } = toggle.actions;
export const { setLanguage } = language.actions;

export default configureStore({
    reducer: {
        gnb: gnb.reducer,
        gnbActive: gnbActive.reducer,
        kartbodyCommon: kartbodyCommon.reducer,
        characterCommonName: characterCommonName.reducer,
        selectIndex: selectIndex.reducer,
        outside: outside.reducer,
        toggle: toggle.reducer,
        commonRoute: commonRoute.reducer,
        difficulty: difficulty.reducer,
        language: language.reducer,
        tracks: tracks.reducer
    },
});