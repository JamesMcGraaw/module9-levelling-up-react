import Home from './components/Home'
import Users from './components/Users'
import Contact from './components/Contact'
import NotFound from "./components/NotFound";
import Cow from "./components/Cow";
import Pig from "./components/Pig";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter> {/* Routes, Route and Link components *MUST* go inside BrowserRouter */}
          {/* Example of links - could be abstracted into a navbar component */}
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/users">Users</Link>

          {/* Defining the actual routes */}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="users" element={<Users />} />
              {/*<Route path="pigs" element={<Pig />} />*/}
              {/*<Route path="cow/:name" element={<Cow />} />*/}
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  )
}
export default App;