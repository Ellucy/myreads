import Bookshelf from "./Bookshelf";

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