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

export default Bookshelf;