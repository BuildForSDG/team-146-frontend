export const LOG_IN = 'LOGIN';
export const SIGN_UP = 'SIGNUP';
export const SIGN_OUT = 'SIGN_OUT';

export function login(payload) {
    return {
        type: LOG_IN,
        payload
    }
}