import { configureStore } from '@reduxjs/toolkit';
import defaultReducer from './reducers/default';

export const store = configureStore({
    reducer: {
        default: defaultReducer.reducer
    }
});

export const actions = {
    default: defaultReducer.actions
};
