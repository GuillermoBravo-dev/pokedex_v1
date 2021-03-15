import React, {useState, useEffect} from "react";
import "./styles.css"
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Pokedex from "./components/Pokedex.jsx"
import {getPokemonData, getPokemons, searchPokemon} from "./api.js"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  // Páginas:
  const [page, setPage] = useState([0])
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true)
  // Pedir pokemones a la API: (Desde api.js)
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(25, 25 * page) // api.js
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count / 25))
    } catch(err) {

    }
  }

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <div>
    <Navbar />
    <div className="App">
      <SearchBar onSearch={onSearch} />
      {notFound ? (
        <div className="not-found-text">
          No se encontro el Pokemon que estabas buscando.
        </div>
      ) : (
        <Pokedex
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      )}
    </div>
  </div>
  );
}

export default App;
