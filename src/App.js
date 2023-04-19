import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heroes from "./components/Heroes";
import SingleHero from "./components/SingleHero";
import SearchUser from "./components/SearchUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heroes />} />
          <Route path="/:name" element={<SingleHero />} />
          <Route path="/search-user" element={<SearchUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
