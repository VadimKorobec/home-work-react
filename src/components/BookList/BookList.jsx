import { BookItem } from 'components/BookItem/BookItem';

export const BookList = ({ books }) => {
  return (
    <div>
      <ul>
        {books.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};
