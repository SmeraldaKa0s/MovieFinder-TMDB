import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import MainMovies from "./components/MainMovies";
import MainSeries from "./components/MainSeries";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import Context from "./context/Context";
require("./styles/globals.scss");

const App = () => {
  const [language, setLanguage] = useState("es");

  const context = {
    language: language,
    setLanguage: setLanguage
  }

  return (
    <BrowserRouter>
      <Context.Provider value={context}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MainMovies />} />
          <Route path="/series" element={<MainSeries />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
