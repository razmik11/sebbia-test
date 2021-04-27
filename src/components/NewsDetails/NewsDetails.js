import styles from "./NewsDetails.module.scss";

const NewsDetails = ({
  news: { fullDescription, shortDescription, title } = {},
}) => (
  <div className={styles.main}>
    <h1>{title}</h1>
    <p>{shortDescription}</p>
    <div dangerouslySetInnerHTML={{ __html: fullDescription }} />
  </div>
);

export default NewsDetails;
