import styles from "./NewsList.module.scss";
import { Link } from "react-router-dom";

const NewsList = ({ list }) => (
  <ul className={styles.list}>
    {list.map(({ id, title, shortDescription, date }) => (
      <li key={id}>
        <Link to={`/news/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{shortDescription}</p>
        <div>{new Date(date).toDateString()}</div>
      </li>
    ))}
  </ul>
);

export default NewsList;
