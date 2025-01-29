"use client";

import { Search } from "lucide-react";
import { Session } from "next-auth";
import { Input } from "../ui/input";
import { useState } from "react";

const Header = ({ session }: { session: Session }) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        // You can later extend this function to filter/search through actual data
    };

    return (
        <header className="admin-header">
            <div>
                <h2 className="text-2xl font-semibold text-dark-400">
                    {session?.user?.name}
                </h2>
                <p className="text-base text-slate-500">
                    Monitor all of your users and books here
                </p>
            </div>

            <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                    type="text"
                    placeholder="Search users, books by title, author, or genre."
                    className="pl-10 pr-4 py-2 w-full border rounded-lg text-gray-700"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
        </header>
    );
};
export default Header;