import styles from "./Details.module.css";

export default function DetailsText() {
  return (
    <div className={styles.Name}>
      <h2>Date of birth</h2>
      <p>
        This will not be shown publicly. Confirm your own age, even if this
        account is for a business, a pet, or something else.
      </p>
    </div>
  );
}
