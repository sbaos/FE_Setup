import { readCookie } from "../cookies/cookie";
export function getUserInformation() {
    const data = readCookie(process.env.REACT_APP_TOKEN_FIELD_NAME);
    //process token
    if (data) {
        return data;
    }
    return null;
}

