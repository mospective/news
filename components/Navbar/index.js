import Link from "next/link";
import styles from "../../styles/Nav.module.css";

const Navbar = () => {
    return (
        <section className={styles["navigation-bar"]}>
            <div className={styles["inner-container"]}>
                <div className={styles.logo}>
                    <h1 className={styles.mainlogo}>Codehouse <span className={styles.red}>News</span></h1>
                </div>
                <nav className={styles.nav}>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/news"><a>News</a></Link></li>
                </nav>
            </div>
        </section>
    )
};

export default Navbar;