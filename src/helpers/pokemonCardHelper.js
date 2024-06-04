function getPokemonNumber(id) {
  if (!id) return null;
  return "#" + id.toString().padStart(4, "0");
}

function pokemonName(nameStr) {
  if (!nameStr) return null;
  return nameStr[0].toUpperCase() + nameStr.slice(1);
}

function pokemonImage(pokemon) {
  if (!pokemon) {
    return "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png";
  }

  return `${pokemon?.sprites?.other?.home?.front_default}`;
}

function getPokemonAbilities(abilities) {
  if (!abilities) return null;
  return abilities
    .map((value) => {
      return value.ability.name;
    })
    .join(", ");
}

export { pokemonImage, getPokemonNumber, pokemonName, getPokemonAbilities };
