import React from "react";
import styles from "../../styles/pokemonDetails/title.module.css";
import { getPokemonNumber, pokemonName } from "../../helpers/pokemonCardHelper";

function Title(props) {
  const { name, number } = props;
  return (
    <div className={styles.container}>
      <p className={styles.name}>{pokemonName(name)}</p>
      <p className={styles.number}>{getPokemonNumber(number)}</p>
    </div>
  );
}

export default Title;
