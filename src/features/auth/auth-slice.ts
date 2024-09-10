import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: string | null;
    accessToken: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Handles setting the user and access token after login
        setCredentials: (
            state,
            action: PayloadAction<{ user: string; accessToken: string }>
        ) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },
        // Handles clearing the state during logout
        logOut: (state) => {
            state.user = null;
            state.accessToken = null;
        },
        // Handles removing the token for authRefresh
        removeToken: (state) => {
            state.accessToken = null;
        }
    },
});

export const { setCredentials, logOut, removeToken } = authSlice.actions;

// Selectors to get user info and token
export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user;
export const selectAccessToken = (state: { auth: AuthState }) => state.auth.accessToken;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.accessToken !== null;

export default authSlice.reducer;
