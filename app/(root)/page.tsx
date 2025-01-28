import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
import Image from "next/image";

const Home = () => {
  return (<>
    <BookOverview 
      id={sampleBooks[0].id.toString()}
      title={sampleBooks[0].title}
      author={sampleBooks[0].author}
      genre={sampleBooks[0].genre}
      rating={sampleBooks[0].rating}
      totalCopies={sampleBooks[0].total_copies}
      availableCopies={sampleBooks[0].available_copies}
      description={sampleBooks[0].description}
      coverColor={sampleBooks[0].color}
      coverUrl={sampleBooks[0].cover}
      videoUrl={sampleBooks[0].video}
      summary={sampleBooks[0].summary}
    />
    <BookList 
      title="Latest Books" 
      books={sampleBooks.map(book => ({
        id: book.id.toString(),
        title: book.title,
        author: book.author,
        genre: book.genre,
        rating: book.rating,
        totalCopies: book.total_copies,
        availableCopies: book.available_copies,
        description: book.description,
        coverColor: book.color,
        coverUrl: book.cover,
        videoUrl: book.video,
        summary: book.summary
      }))} 
      containerClassName="mt-28" 
    />
  </>
  )
}

export default Home;