import { configureStore, createSlice } from "@reduxjs/toolkit";
import gnbData from "locales/ko/gnb/gnb";
import footerData from "locales/ko/etc/footer.json";
import kartbodyCommonData from "locales/ko/kartbody/contents.json";
import characterCommonData from "locales/ko/character/common/contents.json";
import commonRouteData from "data/route.json";
import inquiryData from "locales/ko/etc/inquiry.json";
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

let pageActive = createSlice({
    name: 'pageActive',
    initialState: {
        mode: null,
        character: null
    },

    reducers: {
        setPageActive: (state, action) => {
            state = action.payload;
            return state;
        }
    }
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
        value: { title: '' }
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
});

let openInNew = createSlice({
    name: 'openInNew',
    initialState: false,

    reducers: {
        setOpenInNew: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

let footer = createSlice({
    name: 'footer',
    initialState: footerData
});

let categoryName = createSlice({
    name: 'categoryName',
    initialState: {
        imgNum: '',
        txtNum: '',
        tabDataState: [],
    },

    reducers: {
        setCategoryName: (state, action) => {
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
        langIndex: 0
    },

    reducers: {
        setSelectIndex: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

let cardRotate = createSlice({
    name: 'cardRotate',
    initialState: null,

    reducers: {
        setCardRotate: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

let ariaBoolean = createSlice({
    name: 'ariaBoolean',
    initialState: false,

    reducers: {
        setAriaBoolean: (state, action) => {
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

let inquiry = createSlice({
    name: 'inquiry',
    initialState: inquiryData
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

export const { setSubVisualTitle } = subVisualTitle.actions;
export const { setRouterScroll } = routerScroll.actions;
export const { setGnbActive } = gnbActive.actions;
export const { setPageActive } = pageActive.actions;
export const { setImgSkeleton } = imgSkeleton.actions;
export const { setStartState } = startState.actions;
export const { setOpenInNew } = openInNew.actions;
export const { setCategoryName } = categoryName.actions;
export const { setAriaBoolean } = ariaBoolean.actions;
export const { setSelectIndex } = selectIndex.actions;
export const { setCardRotate } = cardRotate.actions;
export const { setOutside } = outside.actions;
export const { setToggle } = toggle.actions;
export const { setLanguage } = language.actions;

export default configureStore({
    reducer: {
        gnb: gnb.reducer,
        gnbActive: gnbActive.reducer,
        pageActive: pageActive.reducer,
        subVisualTitle: subVisualTitle.reducer,
        routerScroll: routerScroll.reducer,
        imgSkeleton: imgSkeleton.reducer,
        startState: startState.reducer,
        footer: footer.reducer,
        openInNew: openInNew.reducer,
        categoryName: categoryName.reducer,
        kartbodyCommon: kartbodyCommon.reducer,
        characterCommonName: characterCommonName.reducer,
        ariaBoolean: ariaBoolean.reducer,
        selectIndex: selectIndex.reducer,
        cardRotate: cardRotate.reducer,
        outside: outside.reducer,
        toggle: toggle.reducer,
        commonRoute: commonRoute.reducer,
        inquiry: inquiry.reducer,
        difficulty: difficulty.reducer,
        language: language.reducer,
        tracks: tracks.reducer
    },
});