import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from '../features/auth/auth-slice.ts';
import {baseAPIService} from "@/api/base-api.ts";

// Configure the Redux store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        [baseAPIService.reducerPath]: baseAPIService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            baseAPIService.middleware
        ),
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
