import SelectShelf from "./SelectShelf";

function Book({ book, updateBookShelf }) {

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
                    }}
                ></div>
                <SelectShelf
                    book={book}
                    updateBookShelf={updateBookShelf}
                />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {book.authors.join(', ')}
            </div>
        </div>);
}

export default Book;