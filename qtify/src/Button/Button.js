import styles from "./button.module.css"

export default function Button ({Text}) {
    return (
        <button className={styles.feedBack}>{Text}</button>
    )
};