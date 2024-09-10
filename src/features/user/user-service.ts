import {baseAPIService} from "@/api/base-api.ts";

export const userAPI = baseAPIService.injectEndpoints({
    endpoints: (builder) => ({
        fetchUsers: builder.query<any[], void>({
            query: () => '/users',
        }),
    }),
});

export const { useFetchUsersQuery } = userAPI;
