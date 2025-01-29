"use client"

import { useState } from "react";
import { Trash, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const usersData = [
    {
        id: 1,
        name: "Darrell Steward",
        email: "darrellsteward@gmail.com",
        dateJoined: "Dec 19 2023",
        role: "User",
        booksBorrowed: 10,
        universityId: "90324423789",
    },
    {
        id: 2,
        name: "Marc Atenson",
        email: "marcinee@mial.com",
        dateJoined: "Dec 19 2023",
        role: "Admin",
        booksBorrowed: 32,
        universityId: "90324423789",
    },
    {
        id: 3,
        name: "Susan Drake",
        email: "contact@susandrake.io",
        dateJoined: "Dec 19 2023",
        role: "User",
        booksBorrowed: 13,
        universityId: "90324423789",
    },
];

export default function UserList() {
    const [users, setUsers] = useState(usersData);

    const handleDelete = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const toggleRole = (id: number) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, role: user.role === "Admin" ? "User" : "Admin" } : user
        ));
    };

    return (
        <Card className="p-6 bg-white rounded-lg shadow-lg">
            <CardContent>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">All Users</h2>
                    <Button className="bg-blue-600 text-white px-4 py-2 rounded">+ Add New User</Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Date Joined</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Books Borrowed</TableHead>
                            <TableHead>University ID No</TableHead>
                            <TableHead>University ID Card</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="font-medium">{user.name}</span>
                                        <span className="text-gray-500 text-sm">{user.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{user.dateJoined}</TableCell>
                                <TableCell>
                                    <Button
                                        className={`px-3 py-1 rounded-full text-white text-xs ${user.role === "Admin" ? "bg-green-500" : "bg-red-300"
                                            }`}
                                        onClick={() => toggleRole(user.id)}
                                    >
                                        {user.role}
                                    </Button>
                                </TableCell>
                                <TableCell>{user.booksBorrowed}</TableCell>
                                <TableCell>{user.universityId}</TableCell>
                                <TableCell>
                                    <a href="#" className="text-blue-600 flex items-center gap-1">
                                        View ID Card <ExternalLink size={16} />
                                    </a>
                                </TableCell>
                                <TableCell>
                                    <Trash
                                        className="text-red-500 cursor-pointer"
                                        size={20}
                                        onClick={() => handleDelete(user.id)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
