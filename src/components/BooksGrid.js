import PropTypes from "prop-types";
import Book from "./Book";

function BooksGrid({ books, updateBookShelf, isNoneAllowed }) {
    return (
        <ol className="books-grid">
            {books.map((book) =>
            (
                <li key={book.id}>
                    <Book
                        book={book}
                        updateBookShelf={updateBookShelf}
                        isNoneAllowed={isNoneAllowed}
                    />
                </li>
            ))}
        </ol>
    )
}

BooksGrid.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    isNoneAllowed: PropTypes.bool,
};

export default BooksGrid;