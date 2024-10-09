import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import {
    createStateSyncMiddleware,
    initMessageListener,
} from "redux-state-sync";
import modeSlice from './modeSlice';
import printerSlice from './printerSlice';
const store = configureStore({
    reducer: {
        user: userSlice,
        mode: modeSlice,
        printers: printerSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(createStateSyncMiddleware({})),
})
initMessageListener(store);
export default store;

