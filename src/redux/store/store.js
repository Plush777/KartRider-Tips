import { configureStore , createSlice } from "@reduxjs/toolkit";
import gnbData from "data/gnb/gnb";
import footerData from "data/etc/footer.json";
import kartbodyCommonData from "data/kartbody/common/contents.json";
import characterCommonData from "data/character/common/contents.json";

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
    initialState: footerData.data
});

let categoryName = createSlice({
    name: 'categoryName',
    initialState: {
        imgNum: '',
        tabInfoTxt: '',
        tabDataState: [],
        tabClass: ''
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
    initialState: kartbodyCommonData.kartDesc
});

let characterCommonName = createSlice({
    name: 'characterCommonName',
    initialState: characterCommonData.card
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
})

export const { setSubVisualTitle } = subVisualTitle.actions;
export const { setRouterScroll } = routerScroll.actions;
export const { setImgSkeleton } = imgSkeleton.actions;
export const { setStartState } = startState.actions;
export const { setOpenInNew } = openInNew.actions;
export const { setCategoryName } = categoryName.actions;
export const { setAriaBoolean } = ariaBoolean.actions;

export default configureStore({
    reducer: {
        gnb: gnb.reducer,
        subVisualTitle: subVisualTitle.reducer,
        routerScroll: routerScroll.reducer,
        imgSkeleton: imgSkeleton.reducer,
        startState: startState.reducer,
        footer: footer.reducer,
        openInNew: openInNew.reducer,
        categoryName: categoryName.reducer,
        kartbodyCommon: kartbodyCommon.reducer,
        characterCommonName: characterCommonName.reducer,
        ariaBoolean: ariaBoolean.reducer
    },
});