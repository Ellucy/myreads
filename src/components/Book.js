import SelectShelf from "./SelectShelf";

function Book({ book, updateBookShelf, isNoneAllowed }) {

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className={
                        book.imageLinks
                            ? "book-cover"
                            : "book-cover missing-image"

                    }
                    style={
                        book.imageLinks ?
                            {
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                            } : {}}
                ></div>
                <SelectShelf
                    book={book}
                    updateBookShelf={updateBookShelf}
                    isNoneAllowed={isNoneAllowed}
                />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {book.authors && book.authors.join(', ')}
            </div>
        </div>);
}

export default Book;