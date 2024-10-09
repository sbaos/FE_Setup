import { createCookie } from "../cookies/cookie";
export function SignIn(data, token) {
    // check data
    if (data?.email) {
        createCookie(process.env.REACT_APP_TOKEN_FIELD_NAME, data, process.env.REACT_APP_TOKEN_EXPIRE_TIME);
        return;
    }
    if (token) {

    }
}