
function SelectShelf({ book, isNoneAllowed, updateBookShelf }) {

    return (
        <div className="book-shelf-changer">
            <select
                value={book.shelf}
                onChange={(event) => {
                    console.log(event.target.value)
                    if (book.shelf !== event.target.value) {
                        updateBookShelf(book.id, event.target.value);
                    }

                }}
            >
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                {isNoneAllowed && <option value="none">None</option>}
            </select>
        </div>
    )
}

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

function MainView({ myBooks, updateBookShelf }) {

    const setShowSearchpage = () => { }
    const showSearchPage = () => { }

    const booksCurrentlyReading = myBooks.filter((b) => b.shelf === "currentlyReading");
    const booksWantToRead = myBooks.filter((b) => b.shelf === "wantToRead");
    const booksRead = myBooks.filter((b) => b.shelf === "read");

    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf
                            books={booksCurrentlyReading}
                            shelfTitle="Currently Reading"
                            updateBookShelf={updateBookShelf}
                        />
                    </div>
                    <div>
                        <Bookshelf
                            books={booksWantToRead}
                            shelfTitle="Want to Read"
                            updateBookShelf={updateBookShelf}
                        />
                    </div>
                    <div>
                        <Bookshelf
                            books={booksRead}
                            shelfTitle="Read"
                            updateBookShelf={updateBookShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
                </div>
            </div>
        </div>

    );
}

export default MainView;