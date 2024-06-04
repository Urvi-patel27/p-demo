import React from "react";
import styles from "../styles/layout/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faDove
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>
        Pokédex
        <FontAwesomeIcon icon={faDove} className={styles.icon} />
      </h1>
    </div>
  );
}

export default Navbar;
