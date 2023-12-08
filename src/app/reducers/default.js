import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contract: "",
    options: {}
};

export const defaultReducer = createSlice({
    name: 'default',
    initialState,
    reducers: {
        fillContract: (state, action) => {
            state.contract = action.payload;
        },
        fillOptions: (state, action) => {
            state.options = action.payload;
        }
    }
});

export default defaultReducer;
