import styles from "./trending.module.css";

export default function Trending() {
  return (
    <div className={styles.Trend}>
      <h3>What's happening</h3>
      <div className={styles.tweet}>#csk won</div>
      <div className={styles.tweet}>#go back modi</div>
    </div>
  );
}
