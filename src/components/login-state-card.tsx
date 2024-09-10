import { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import useAuth from "@/hooks/useAuth.ts";

export default function LoginStateCard() {
    const { isAuthorized, logOut } = useAuth();

    return (
        <Card className="w-[300px]">
            <CardContent className="pt-6">
                {isAuthorized ? (
                    <Button onClick={logOut} variant="destructive">Logout</Button>
                ) : (
                    <p className="text-center text-lg font-medium">You are not logged in</p>
                )}
            </CardContent>
        </Card>
    )
}