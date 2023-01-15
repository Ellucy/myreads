function SelectShelf({ book, isNoneAllowed, updateBookShelf }) {

    return (
        <div className="book-shelf-changer">
            <select
                value={book.shelf}
                onChange={(event) => {
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

export default SelectShelf;