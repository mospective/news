import styles from "../../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["inner-container"]}>
                <p>Copyright © Codehouse FE Team 2022</p>
            </div>
        </footer>
    );
};

export default Footer;