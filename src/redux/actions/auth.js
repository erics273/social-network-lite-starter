import * as types from "./actionTypes";

export function login(payload) {
    return { type: types.LOGIN, payload };
}