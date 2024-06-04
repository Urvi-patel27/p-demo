import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="pokemonDetails/:name" element={<PokemonDetails />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
