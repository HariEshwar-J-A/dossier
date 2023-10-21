import {configureStore} from '@reduxjs/toolkit';
import uiReducer from '../reducers/uiReducer';
import navReducer from '../reducers/navReducer';

export default configureStore({
    reducer: {
        ui: uiReducer,
        nav: navReducer
    }
})