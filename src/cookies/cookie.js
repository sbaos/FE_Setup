import { TOKEN_STATUS } from "../const/tokenStatus";
import { jwtDecode } from "jwt-decode";
import sign from 'jwt-encode';
function encode_cookie(data) {
    if (!data) {
        return;
    }
    return sign(data, process.env.REACT_APP_TOKEN_SECRET_KEY || '');
}
function decoded_cookie(token) {
    return jwtDecode(token);
}

export function validateToken(token) {
    try {
        const data = decoded_cookie(token);
        if (data.expires) {
            const currentTime = Math.floor(Date.now() / 1000);
            if (data.expires < currentTime) {
                return TOKEN_STATUS.EXPIRED;
            } else {
                return TOKEN_STATUS.VALID;
            }
        } else {
            return TOKEN_STATUS.ERROR;
        }
    } catch (e) {
        return TOKEN_STATUS.ERROR;
    }
}
export function readCookie(cname) {
    let token = document.cookie?.split('=')[1];
    if (validateToken(token) !== TOKEN_STATUS.VALID) {
        return null;
    }
    try {
        return decoded_cookie(token, process.env.REACT_APP_TOKEN_SECRET_KEY || '');
    } catch (error) {
        return TOKEN_STATUS.NOT_FOUND;
    }
}

export function createCookie(fieldName, fieldValue, expiry) {
    if (!fieldValue) {
        return;
    }
    let timeMultiplier = 0;
    const unit = expiry.slice(-1);
    const value = parseInt(expiry.slice(0, -1), 10);
    switch (unit) {
        case 's': // seconds
            timeMultiplier = 1000;
            break;
        case 'm': // minutes
            timeMultiplier = 1000 * 60;
            break;
        case 'h': // hours
            timeMultiplier = 1000 * 60 * 60;
            break;
        case 'd': // days
            timeMultiplier = 1000 * 60 * 60 * 24;
            break;
        default:
            console.error("Invalid expiry unit. Use 's' for seconds, 'm' for minutes, 'h' for hours, or 'd' for days.");
            return;
    }
    let date = new Date();
    date.setTime(date.getTime() + value * timeMultiplier);
    const expires = "expires=" + date.toUTCString();
    const data = fieldValue;
    data.expires = date.getTime();
    const token = encode_cookie(data);
    document.cookie = `${fieldName}=${token};${expires};path=/`;
}

export function removeCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
