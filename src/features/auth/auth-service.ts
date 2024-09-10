import {baseAPIService} from "@/api/base-api.ts";

export const authAPI = baseAPIService.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<{ token: string }, { username: string; password: string }>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        refresh: builder.mutation<{ token: string }, void>({
            query: () => ({
                url: '/auth/refresh',
                method: 'POST',
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
        }),
    }),
});

export const { useLoginMutation, useRefreshMutation, useLogoutMutation } = authAPI;