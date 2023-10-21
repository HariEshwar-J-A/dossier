import {createSlice} from '@reduxjs/toolkit';

export const navReducer = createSlice({
    name: 'nav',
    initialState: {
        route: ''
    },
    reducers: {
        setRoute: (state, data) => {
            state.route = data.route;
        },
        resetRoute: (state) => {
            state.route = ''
        }
    }
});

export const {setRoute, resetRoute} = navReducer.actions

export default navReducer.reducer