import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    item: null,
    options: null
};

export const defaultReducer = createSlice({
    name: 'default',
    initialState,
    reducers: {
        fillList: (state, action) => {
            state.list = action.payload;
        },
        fillItem: (state, action) => {
            state.item = action.payload;
        },
        fillOptions: (state, action) => {
            state.options = action.payload;
        }
    }
});

export default defaultReducer;
