import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    compile: "",
    contract: {},
    options: {},
    details: {},
    walletClient: null
};

export const defaultReducer = createSlice({
    name: 'default',
    initialState,
    reducers: {
        fillCompile: (state, action) => {
            state.compile = action.payload;
        },
        fillContract: (state, action) => {
            state.contract = action.payload;
        },
        fillOptions: (state, action) => {
            state.options = action.payload;
        },
        fillDetails: (state, action) => {
            state.details = action.payload;
        },
        setWalletClient: (state, action) => {
            state.walletClient = action.payload
        }
    }
});

export default defaultReducer;
