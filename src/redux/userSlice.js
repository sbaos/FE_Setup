import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { removeCookie } from '../cookies/cookie';
import { USER_ROLE } from '../const/role';
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: '',
        name: '',
        email: '',
        role: '',
        coin: '15.00',
        isLogin: false,
    },
    reducers: {
        login(state, action) {
            state.isLogin = true;
            state.role = USER_ROLE.USER;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            // createCookie('auth_token_', 'this is a token for test', process.env.REACT_APP_TOKEN_EXPIRE_TIME);
        },
        logout(state, action) {
            if (state.isLogin === true) {
                toast.success("Logout success");
                removeCookie(process.env.REACT_APP_TOKEN_FIELD_NAME);
                state.role = '';
                state.isLogin = false;
                state.id = '';
                state.name = '';
                state.email = '';
                state.role = '';

            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer