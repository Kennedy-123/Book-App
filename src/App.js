import { books } from './Books';
import Book from './Book';

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Selling</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
};

export default BookList;
