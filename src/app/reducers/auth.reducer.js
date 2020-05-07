import { LOG_IN, SIGN_OUT } from "../actions/auth.actions";

const initialState = {
    isLoggedIn: false,
}

export function AuthReducer(state = initialState, action) {
    const payload = action.payload;
    switch (action.type) {
        case LOG_IN:
            console.log(state, payload);
            return { ...state, ...payload };
        case SIGN_OUT: {
            return { ...state, ...payload };
        }
        default:
            return state;
    }
}