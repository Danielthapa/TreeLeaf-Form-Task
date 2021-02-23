import { configureStore } from '@reduxjs/toolkit';
import userInfo from './UserInfo';

const infoReducer = userInfo.reducer;

export default configureStore({
    reducer: {
        info: infoReducer
    }
})

