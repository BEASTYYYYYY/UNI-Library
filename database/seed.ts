import { config } from "dotenv";
import ImageKit from "imagekit";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import { books } from "./schema";

config({ path: ".env.local" });

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!);
export const db = drizzle({ client: sql });

const dummyBooks = [
    {
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell and Peter Norvig",
        genre: "Artificial Intelligence",
        rating: 4,
        coverUrl:
            "https://m.media-amazon.com/images/I/61nHC3YWZlL._AC_UF1000,1000_QL80_.jpg",
        coverColor: "#c7cdd9",
        description:
            "A leading textbook on artificial intelligence, offering a deep dive into algorithms, machine learning, and robotics, suitable for both beginners and professionals.",
        totalCopies: 10,
        videoUrl:
            "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
        summary:
            "Artificial Intelligence: A Modern Approach is a comprehensive guide to the field of AI, combining foundational concepts with cutting-edge research. The book covers topics like search algorithms, knowledge representation, machine learning, and robotics. \n\nIts clear explanations and practical examples make it a valuable resource for students, researchers, and industry professionals. By bridging theory and application, this book serves as a cornerstone for understanding and advancing AI technologies. \n\nThe book is suitable for both beginners and professionals, offering a deep understanding of the fundamental concepts and applications of AI.",
    },
    {
        title: "Computer Networking: A Top-Down Approach",
        author: "James F. Kurose and Keith W. Ross",
        genre: "Networking",
        rating: 5,
        coverUrl:
            "https://m.media-amazon.com/images/I/91hg1HHyiWL._AC_UF1000,1000_QL80_.jpg",
        coverColor: "#f7a13e",
        description:
            "A comprehensive introduction to computer networking, using a top-down approach to explain protocols, architecture, and applications.",
        totalCopies: 25,
        videoUrl:
            "https://www.shutterstock.com/shutterstock/videos/1107129903/preview/stock-footage-an-open-book-is-on-fire-big-bright-flame-burning-paper-on-old-publication-in-the-dark-book.webm",
        summary:
            "'Computer Networking: A Top-Down Approach' provides a thorough and accessible introduction to the world of computer networks. James Kurose and Keith Ross present networking concepts by starting with high-level applications like web browsers and email, gradually moving down to the underlying layers of networking protocols. \n\nThe book covers essential topics such as HTTP, DNS, TCP/IP, and network security. Each chapter includes practical examples, hands-on exercises, and real-world scenarios to help readers grasp complex concepts. The authors also explore emerging trends like cloud computing and the Internet of Things, ensuring that the material remains relevant in a rapidly evolving field. \n\nWhether you're a student, professional, or enthusiast, this book offers a clear and engaging path to understanding the architecture and operation of modern computer networks.",
    },
    {
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "Fantasy / Fiction",
        rating: 4,
        totalCopies: 20,
        availableCopies: 10,
        description:
            "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
        coverColor: "#1c1f40",
        coverUrl: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help / Productivity",
        rating: 4,
        totalCopies: 99,
        availableCopies: 50,
        description:
            "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
        coverColor: "#fffdf6",
        coverUrl: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
    },
    {
        title: "You Don't Know JS: Scope & Closures",
        author: "Kyle Simpson",
        genre: "Computer Science / JavaScript",
        rating: 4,
        totalCopies: 9,
        availableCopies: 5,
        description:
            "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
        coverColor: "#f8e036",
        coverUrl:
            "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Philosophy / Adventure",
        rating: 5,
        totalCopies: 78,
        availableCopies: 50,
        description:
            "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
        coverColor: "#ed6322",
        coverUrl:
            "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        genre: "Self-Help / Productivity",
        rating: 3,
        totalCopies: 23,
        availableCopies: 23,
        description:
            "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
        coverColor: "#ffffff",
        coverUrl: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Computer Science / Programming",
        rating: 5,
        totalCopies: 56,
        availableCopies: 56,
        description:
            "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
        coverColor: "#080c0d",
        coverUrl:
            "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
    },
];

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

async function uploadToImageKit(url: string, fileName: string, folder: string) {
    try {
        const response = await imagekit.upload({
            file: url,
            fileName: fileName,
            folder,
        });
        return response.filePath;
    } catch (error) {
        console.error(`Error uploading ${fileName} to ImageKit:`, error);
        throw error;
    }
}

async function seed() {
    console.log("Seeding books...");

    try {
        for (const book of dummyBooks) {
            const coverUrl = await uploadToImageKit(
                book.coverUrl,
                `${book.title}.jpg`,
                "/books/covers"
            );

            const videoUrl = await uploadToImageKit(
                book.videoUrl,
                `${book.title}.mp4`,
                "/books/videos"
            );

            await db.insert(books).values({
                title: book.title,
                author: book.author,
                genre: book.genre,
                rating: book.rating,
                coverUrl,
                coverColor: book.coverColor,
                description: book.description,
                totalCopies: book.totalCopies,
                availableCopies: book.availableCopies,
                videoUrl,
                summary: book.summary,
            });

            console.log(`Added book: ${book.title}`);
        }

        console.log("Seeding completed successfully.");
    } catch (error) {
        console.error("Error seeding books:", error);
    }
}

seed();