import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {logOut, removeToken, setCredentials} from "@/features/auth/auth-slice.ts";

const dynamicBaseQuery = async (args, api, extraOptions) => {
    const { getState } = api;
    const state = getState();
    const backendUrl = state.institute.info.url;

    // Configuring the base query with dynamic base URL and headers
    return fetchBaseQuery({
        baseUrl: backendUrl,
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const { accessToken } = getState().auth;

            // If an access token is available, set the Authorization header
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }

            return headers;
        }
    })(args, api, extraOptions);
};

const staticBaseQuery = async (args, api, extraOptions) => {
    return fetchBaseQuery({
        baseUrl: 'https://dummyjson.com', // You can replace this with a static URL.
        // credentials: 'include', // Handle cookies if required
        prepareHeaders: (headers, { getState }) => {
            const { accessToken } = getState().auth;

            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }

            return headers;
        }
    })(args, api, extraOptions);
};

export const baseQueryWithReAuth = async (args, api, extraOptions) => {

    if (args.url === 'api/v2/auth/login') {
        return staticBaseQuery(args, api, extraOptions);
    }

    // Perform the initial API request
    let originalResponse = await staticBaseQuery(args, api, extraOptions);

    // Check if the response indicates an unauthorized error
    if (originalResponse?.error?.status === 401) {
        // Remove the current access token from the state
        api.dispatch(removeToken());

        // Attempt to refresh the access token using the refresh token
        const refreshResponse = await staticBaseQuery({ url: 'auth/refresh', method: 'POST' }, api, extraOptions);

        if (refreshResponse?.data) {
            // If refresh is successful, store the new access token
            api.dispatch(setCredentials({user: "temp", accessToken: refreshResponse.data.token}));

            // Retry the original API request with the new access token
            originalResponse = await staticBaseQuery(args, api, extraOptions);

            // If the retry also results in an unauthorized error, log out the user
            if (originalResponse?.error?.status === 401) {
                api.dispatch(logOut());
            }
        } else {
            // If the refresh fails, log out the user
            api.dispatch(logOut());
        }
    }

    // Return the response from the original or retried API request
    return originalResponse;
};

// !!! IMPORTANT IF YOU ADD NEW SERVICE - DEFINE TAG HERE
// AND EXTEND BASE API SERVICE WITH INJECT ENDPOINTS FUNCTION
export const baseAPIService = createApi({
    reducerPath: 'api',
    tagTypes: [],
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({})
});