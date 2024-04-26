import { configureStore, createSlice } from "@reduxjs/toolkit";

let selectIndex = createSlice({
    name: 'selectIndex',
    initialState: {
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

export const { setSelectIndex } = selectIndex.actions;
export const { setToggle } = toggle.actions;

export default configureStore({
    reducer: {
        selectIndex: selectIndex.reducer,
        toggle: toggle.reducer
    },
});