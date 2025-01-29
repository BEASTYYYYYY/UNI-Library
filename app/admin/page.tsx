import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Overview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["Borrowed Books", "Total Users", "Total Books"].map((label, index) => (
          <Card key={index} className="p-4 flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">{label}</p>
              <h2 className="text-3xl font-bold">{Math.floor(Math.random() * 500)}</h2>
            </div>
            <span className="text-lg font-semibold text-green-500">+{Math.floor(Math.random() * 10)}</span>
          </Card>
        ))}
      </div>

      {/* Borrow Requests & Recently Added Books */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Borrow Requests */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Barrow Requests</h3>
              <Button variant="outline">View All</Button>
            </div>
            <div className="mt-4 space-y-3">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex items-center gap-3 border p-3 rounded-lg">
                  <Image src="/placeholder-book.png" alt="Book Cover" width={40} height={60} />
                  <div>
                    <p className="font-medium">Sample Book {index}</p>
                    <p className="text-sm text-gray-500">By Author {index} • Genre</p>
                    <p className="text-xs text-gray-400">User {index} • 12/01/24</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recently Added Books */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recently Added Books</h3>
              <Button variant="outline">View All</Button>
            </div>
            <div className="mt-4 space-y-3">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                + Add New Book
              </Button>
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex items-center gap-3 border p-3 rounded-lg">
                  <Image src="/placeholder-book.png" alt="Book Cover" width={40} height={60} />
                  <div>
                    <p className="font-medium">Sample Book {index}</p>
                    <p className="text-sm text-gray-500">By Author {index} • Genre</p>
                    <p className="text-xs text-gray-400">12/01/24</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Account Requests */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Account Requests</h3>
            <Button variant="outline">View All</Button>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="flex items-center gap-3 border p-3 rounded-lg">
                <Image src="/placeholder-avatar.png" alt="User Avatar" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="font-medium">User {index}</p>
                  <p className="text-sm text-gray-500">user{index}@mail.com</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
