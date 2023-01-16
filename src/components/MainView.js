import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Bookshelf from "./Bookshelf";

function MainView({ myBooks, updateBookShelf }) {
    let navigate = useNavigate();

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
                    <a onClick={() => { navigate("/search"); }}>Add a book</a>
                </div>
            </div>
        </div>

    );
}

MainView.propTypes = {
    myBooks: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
};

export default MainView;