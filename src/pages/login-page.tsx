import {InputForm} from "@/features/auth/login-form.tsx";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl">Login Page</h1>
            <InputForm />
        </div>
    );
};

export default LoginPage;