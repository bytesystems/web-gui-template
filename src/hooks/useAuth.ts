import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { logOut as _logOut, selectIsAuthenticated } from "@/features/auth/auth-slice.ts";
import {useAppDispatch} from "@/app/store.ts";
import {useLogoutMutation} from "@/features/auth/auth-service.ts";

// Define the return type of the hook
interface UseAuthReturn {
    isAuthorized: boolean;
    logOut: () => Promise<void>;
}

const useAuth = (): UseAuthReturn => {
    const dispatch = useAppDispatch(); // Typed dispatch
    const isAuthorized = useSelector(selectIsAuthenticated); // Boolean value
    const [postReqLogout] = useLogoutMutation(); // Logout mutation

    // Memoized logOut function to handle the logout process
    const logOut = useCallback(async () => {
        if (isAuthorized) {
            await postReqLogout();
            dispatch(_logOut());
        }
    }, [isAuthorized, postReqLogout, dispatch]);

    // Memoize the return value for performance optimization
    return useMemo(() => ({ isAuthorized, logOut }), [isAuthorized, logOut]);
};

export default useAuth;
