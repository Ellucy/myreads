import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import * as BooksAPI from './BooksAPI'
import MainView from "./views/MainView";
import SearchView from "./views/SearchView";


function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<MainView myBooks={books} />} />
      <Route path="/search" element={<SearchView />} />
    </Routes>
  );

}

export default App;
