import styles from './HomeTop.module.css';
import { Navbar } from '../Navbar/Navbar';

export function HomeTop() {


    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.landingPage}>
                <div>
                    {/* <p>Less stress when sharing expenses</p> */}
                </div>

                <div>

                </div>
            </div>
        </div>
    );
}