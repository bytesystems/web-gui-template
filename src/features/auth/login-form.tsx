"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {toast} from "@/hooks/use-toast.ts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {useLoginMutation} from "@/features/auth/auth-service.ts";
import {useAppDispatch} from "@/app/store.ts";
import {setCredentials} from "@/features/auth/auth-slice.ts";

const FormSchema = z.object({
    username: z.string().min(2, {message: "Username must be at least 2 characters.",    }),
    password: z.string().min(8, "Password must be at least 8 characters long"),
})

export function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "emilys",
            password: "emilyspass",
        },
    })

    const [login, { isLoading, error }] = useLoginMutation(); // Use RTK Query mutation
    const dispatch = useAppDispatch();

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            const response = await login(data).unwrap(); // Perform login API request
            dispatch(setCredentials({ user: data.username, accessToken: response.token }));
            toast({
                title: "Login Successful",
                description: `Welcome, ${data.username}!`,
            });
        } catch (err) {
            toast({
                title: "Login Failed",
                description: "Invalid credentials, please try again.",
                variant: "destructive", // Add a variant for error
            });
        }
    }

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to access your account.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your password
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
