import { createSlice } from '@reduxjs/toolkit';

const name = 'auth';

const createInitialState = () : AuthSlice => {
    var userJson = localStorage.getItem('user') ?? JSON.stringify("")
    var user = JSON.parse(userJson);
    return {
        user: user ?? null,
        error: null
    }
}
var initialstate = createInitialState();
const slice = createSlice({
    name,
    initialState: initialstate ,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    }

}); 

export const authReducer = slice.reducer;
export const authActions = {...slice.actions};

export type User = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    token: string
}

export type AuthSlice = {
    user: User| null,
    error:  unknown;
}
export const initialState: AuthSlice = {
    user : null,
    error : null
}
