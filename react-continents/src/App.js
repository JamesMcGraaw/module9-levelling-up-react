import './App.css';
import Africa from "./components/Africa";
import Antarctica from "./components/Antarctica";
import Asia from "./components/Asia";
import Europe from "./components/Europe";
import NorthAmerica from "./components/NorthAmerica";
import Oceania from "./components/Oceania";
import SouthAmerica from "./components/SouthAmerica";
import {
    BrowserRouter,
    Link,
    Routes,
    Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
      <Link to="/africa">Africa</Link>
      <Link to="/antarctica">Antarctica</Link>
      <Link to="/asia">Asia</Link>
      <Link to="/europe">Europe</Link>
      <Link to="/northamerica">North America</Link>
      <Link to="/oceania">Oceania</Link>
      <Link to="/southamerica">South America</Link>

      <Routes >
        <Route path="africa" element={<Africa />} />
        <Route path="antarctica" element={<Antarctica />} />
        <Route path="asia" element={<Asia />} />
        <Route path="europe" element={<Europe />} />
        <Route path="northamerica" element={<NorthAmerica />} />
        <Route path="oceania" element={<Oceania />} />
        <Route path="southamerica" element={<SouthAmerica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
