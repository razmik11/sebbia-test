import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoriesList.module.scss";

const CategoriesList = ({ categories }) => {
  return (
    <div className={styles.main}>
      <h1>News categories:</h1>
      <ul className={styles.newsList}>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/categories/${id}/news`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
