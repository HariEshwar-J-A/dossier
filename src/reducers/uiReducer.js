import {createSlice} from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        theme: 'light'
    },
    reducers: {
        setLightTheme: state => {
            state.theme = 'light'
        },
        setDarkTheme: state => {
            state.theme = 'dark'
        }
    }
});

export const {setLightTheme, setDarkTheme} = uiSlice.actions

export default uiSlice.reducer