import PropTypes from "prop-types";
import BooksGrid from "./BooksGrid";

function Bookshelf({ books, shelfTitle, updateBookShelf }) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <BooksGrid
                    books={books}
                    updateBookShelf={updateBookShelf}
                />
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
};

export default Bookshelf;