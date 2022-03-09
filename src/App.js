import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainMovies from "./components/MainMovies";
import MainSeries from "./components/MainSeries";
import Error404 from "./components/Error404";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MainMovies />} />
      <Route path="/series" element={<MainSeries />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
