import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';

export function Navbar() {

    const navigate = useNavigate();

    function handleLogin() {
        navigate('login');
    }

    function handleSignup() {
        navigate('signup')
    }


    return (
        <div className={styles.main}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} onClick={()=>navigate('/')} src='https://i.pinimg.com/originals/a7/63/5b/a7635b1254e8428b4cdc6f48cee9a459.png' alt='splitwise-logo'/>
                <span className={styles.logoName} onClick={()=>navigate('/')}>Splitwise</span>
            </div>

            <div className={styles.loginContainer}>
                <button onClick={handleLogin} className={styles.loginBtn}>Log in</button>
                <button onClick={handleSignup} className={styles.signupBtn}>Sign up</button>
            </div>
        </div>
    );
}