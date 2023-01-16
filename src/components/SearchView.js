import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import BooksGrid from "./BooksGrid";

function SearchView({ myBooks, updateBookShelf }) {
    let navigate = useNavigate();

    const [msg, setMsg] = useState("");
    const [searchStr, setSearchStr] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const searchStrTrimmed = searchStr.trim();

        const searchBooks = async () => {
            try {
                const res = await BooksAPI.search(searchStrTrimmed, 100);
                setSearchResults(res)

            } catch (error) {
                setSearchResults(null);
            }
        };

        if (searchStrTrimmed) {
            searchBooks();
        } else {
            setBooks([]);
        }
    }, [searchStr]);

    useEffect(() => {
        if (searchResults instanceof Array && searchResults.length) {
            setMsg("");
            const myBooksGroupedObj = myBooks.reduce((acc, curr) => {
                acc[curr.id] = curr;
                return acc;
            }, {});

            const prepRes = searchResults.map((b) => {

                if (myBooksGroupedObj[b.id]) {
                    b.shelf = myBooksGroupedObj[b.id].shelf;
                } else {
                    b.shelf = "none";
                }
                return b;
            });

            setBooks(prepRes);
            return;
        }

        setBooks([]);

        if (searchResults instanceof Array && !searchResults.length) {
            setMsg("No results");
            return;
        }

        if (searchResults === Object(searchResults) && searchResults.error) {
            setMsg("No results: " + searchResults.error);
        }

    }, [myBooks, searchResults]);

    return (
        <div className="app">
            <div className="search-books">
                <div className="search-books-bar">
                    <a
                        className="close-search"
                        onClick={() => { navigate("/"); }}
                    >
                        Close
                    </a>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            value={searchStr}
                            onChange={(event) => {
                                setSearchStr(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {!!msg &&
                        (<p>{msg}</p>)}

                    {!!books.length && (
                        <BooksGrid
                            books={books}
                            updateBookShelf={updateBookShelf}
                            isNoneAllowed
                        />
                    )}

                </div>
            </div>
        </div >
    );
}

SearchView.propTypes = {
    myBooks: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
};

export default SearchView;