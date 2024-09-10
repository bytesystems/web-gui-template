'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import {useFetchUsersQuery} from "@/features/user/user-service.ts";
import {Card, CardContent} from "@/components/ui/card.tsx";

export default function UserListing() {
    const [searchTerm, setSearchTerm] = useState('')
    const { data, isLoading, error } = useFetchUsersQuery()

    console.log(data)
    const users = data?.users ?? [];

    return (
        <Card>
            <CardContent>

                <div className="container mx-auto py-10">
                    <h1 className="text-2xl font-bold mb-4">User Listing</h1>
                    <Input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-4"
                    />
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[50px]">Avatar</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Username</TableHead>
                                    <TableHead>Password</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isLoading ? (
                                    // Skeleton loading state
                                    Array.from({length: 5}).map((_, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Skeleton className="h-10 w-10 rounded-full"/>
                                            </TableCell>
                                            <TableCell><Skeleton className="h-4 w-[200px]"/></TableCell>
                                            <TableCell><Skeleton className="h-4 w-[200px]"/></TableCell>
                                            <TableCell><Skeleton className="h-4 w-[100px]"/></TableCell>
                                            <TableCell><Skeleton className="h-4 w-[100px]"/></TableCell>
                                            <TableCell><Skeleton className="h-4 w-[100px]"/></TableCell>
                                        </TableRow>
                                    ))
                                ) : error ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center text-red-500">
                                            Error loading users. Please try again later.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    users.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>
                                                <Avatar>
                                                    <AvatarImage src={user.image}
                                                                 alt={`${user.firstName} ${user.lastName}`}/>
                                                    <AvatarFallback>{user.firstName[0] + user.lastName[0]}</AvatarFallback>
                                                </Avatar>
                                            </TableCell>
                                            <TableCell className="font-medium">{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell>{user.username}</TableCell>
                                            <TableCell>{user.password}</TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}