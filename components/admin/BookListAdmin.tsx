"use client"

import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const booksData = [
    {
        id: 1,
        title: "The Great Reclamation: A Novel",
        author: "Rachel Heng",
        genre: "Strategic, Fantasy",
        dateCreated: "Dec 19 2023",
        image: "/book1.jpg",
    },
    {
        id: 2,
        title: "Inside Evil: Inside Evil Series, Book 1",
        author: "Rachel Heng",
        genre: "Strategic, Fantasy",
        dateCreated: "Dec 19 2023",
        image: "/book2.jpg",
    },
    {
        id: 3,
        title: "Jayne Castle - People in Glass Houses",
        author: "Rachel Heng",
        genre: "Strategic, Fantasy",
        dateCreated: "Dec 19 2023",
        image: "/book3.jpg",
    },
];

const BookListAdmin = () => {
    const [books, setBooks] = useState(booksData);

    const handleDelete = (id: number) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <Card className="p-4 bg-white rounded-lg shadow-lg">
            <CardContent>
               
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Book Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Genre</TableHead>
                            <TableHead>Date Created</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {books.map((book) => (
                            <TableRow key={book.id}>
                                <TableCell className="flex items-center gap-2">
                                    <img src={book.image} alt={book.title} className="w-10 h-10 rounded" />
                                    {book.title}
                                </TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.genre}</TableCell>
                                <TableCell>{book.dateCreated}</TableCell>
                                <TableCell className="flex gap-2">
                                    <Pencil className="text-blue-500 cursor-pointer" size={20} />
                                    <Trash className="text-red-500 cursor-pointer" size={20} onClick={() => handleDelete(book.id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default BookListAdmin;
