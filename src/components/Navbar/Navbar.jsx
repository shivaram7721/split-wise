import styles from './Navbar.module.css'

export function Navbar() {


    return (
        <div className={styles.main}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src='https://i.pinimg.com/originals/a7/63/5b/a7635b1254e8428b4cdc6f48cee9a459.png' alt='splitwise-logo'/>
                <p className={styles.logoName}>Splitwise</p>
            </div>

            <div className={styles.loginContainer}>
                <button className={styles.loginBtn}>Log in</button>
                <button className={styles.signupBtn}>Sign up</button>
            </div>
        </div>
    );
}