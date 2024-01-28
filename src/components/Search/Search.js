import React from "react";
import {ReactComponent as SearchIcon} from "../../assets/Search-icon.svg"
import styles from "./Search.module.css"

const Search = ({ search }) => {
    const onSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <form className={styles.wrapper} onSubmit = {onSubmit}>
      <input className={styles.search} placeholder={search}></input>
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;