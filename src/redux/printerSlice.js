import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

export const printerSlice = createSlice({
    name: 'printer',
    initialState: {
        printers: [{
            id: '1',
            name: 'name',
            isAvailable: true,

        }]
    },
    reducers: {
        login(state, action) {
            state.printers[0].isAvailable = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { login } = printerSlice.actions

export default printerSlice.reducer