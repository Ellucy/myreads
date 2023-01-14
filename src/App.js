import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MainView from "./views/MainView";
import SearchView from "./views/SearchView";

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<MainView />} />
      <Route path="/search" element={<SearchView />} />
    </Routes>
  );

}

export default App;
