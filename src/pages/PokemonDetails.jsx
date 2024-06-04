import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemons } from "../services/apiServices";
import Navigations from "../components/pokemonDetails/Navigations";
import Title from "../components/pokemonDetails/Title";
import InfoRow from "../components/pokemonDetails/InfoRow";

function PokemonDetails() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemons(params.name).then((data) => {
      setPokemon(data);
    });
  }, [params.name]);
  console.log("pokemonssss", pokemon);
  if (!pokemon) return null;

  return (
    <div>
      <Navigations />
      <Title name={pokemon.name} number={pokemon.id} />
      <InfoRow pokemon={pokemon} />
    </div>
  );
}

export default PokemonDetails;
