import Book from "./Book";

function BooksGrid({ books, updateBookShelf }) {
    return (
        <ol className="books-grid">
            {books.map((book) =>
            (
                <li key={book.id}>
                    <Book
                        book={book}
                        updateBookShelf={updateBookShelf}
                    />
                </li>
            ))}
        </ol>
    )
}

export default BooksGrid;