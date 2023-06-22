import styles from './SplitHomeLeft.module.css';
import {TbFlagFilled} from 'react-icons/tb'
import {TfiMenuAlt} from 'react-icons/tfi'

export function SplitHomeLeft() {


    return (
        <div className={styles.leftContainer}>
            <div className={styles.container}>
                <div className={styles.dashboardContainer}>
                    <img className={styles.img} src='https://i.pinimg.com/originals/a7/63/5b/a7635b1254e8428b4cdc6f48cee9a459.png'/>
                    <span className={styles.dashboard}>Dashboard</span>
                </div>

                <div className={styles.recentContainer}>
                    <span className={styles.flagIcon}><TbFlagFilled /></span>
                    <span className={styles.recent}>Recent activity</span>
                </div>

                <div className={styles.allExpensesContainer}>
                    <span className={styles.menuIcon}><TfiMenuAlt /></span>
                    <span className={styles.expenses}>All expenses</span>
                </div>

                <div className={styles.groupsContainer}>
                    <span className={styles.groups}>Groups</span>
                    <span className={styles.add}>+add</span>
                </div>
            </div>
        </div>
    )
}