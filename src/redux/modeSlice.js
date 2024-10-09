import { createSlice } from '@reduxjs/toolkit'
import { MODE } from '../const/mode';

export const modeSlice = createSlice({
    name: 'mode',
    initialState: {
        mode: localStorage.getItem('mode') === MODE.DARK.type ? MODE.DARK : MODE.LIGHT
    },
    reducers: {
        changeMode(state, action) {
            if (action.payload.mode)
                state.mode = action.payload.mode;
            localStorage.setItem('mode', state.mode.type)
        },
        toggleMode(state) {
            if (state.mode.type === MODE.LIGHT.type) {
                state.mode = MODE.DARK;
            } else {
                state.mode = MODE.LIGHT;
            }
            localStorage.setItem('mode', state.mode.type)

        }
    },
})

// Action creators are generated for each case reducer function
export const { changeMode, toggleMode } = modeSlice.actions

export default modeSlice.reducer